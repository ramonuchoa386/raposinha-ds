import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, screen } from '@testing-library/react';
import Input from './';
import customRender from '../../utils/test-providers';

describe('Testing Input Component', () => {
    afterEach(cleanup);

    test('Check if correct renders the input placeholder', () => {
        customRender(
            <Input data-testid="input-test01" placeholder="Olá Raposinha" />
        );

        const element = screen.getByTestId('input-test01');

        expect(element).toHaveAttribute('placeholder', 'Olá Raposinha');
    });

    test('Check if correct receive user input', async () => {
        customRender(
            <Input data-testid="input-test02" placeholder="raposinha" />
        );

        const element = screen.getByTestId('input-test02');
        await userEvent.type(element, 'Olá raposinha!');

        expect(element).toHaveValue('Olá raposinha!');
    });

    test('Check if correct renders required props', () => {
        customRender(
            <Input
                data-testid="input-test03"
                placeholder="raposinha"
                required
            />
        );

        const element = screen.getByTestId('input-test03');

        expect(element).toHaveAttribute('required');
    });
});
