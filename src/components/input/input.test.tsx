import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';

import Input from './';
import customRender from '../../utils/test-providers';

describe('Testing Input Component', () => {
    test('Check placeholder in Input', () => {
        customRender(<Input placeholder="Olá Raposinha" />);
        expect(screen.getByPlaceholderText('Olá Raposinha')).toHaveAttribute(
            'placeholder',
            'Olá Raposinha'
        );
    });

    test('renders the Input component', async () => {
        customRender(<Input placeholder="raposinha" />);
        const input: HTMLInputElement =
            screen.getByPlaceholderText('raposinha');
        await userEvent.type(input, 'Olá raposinha!');
        await waitFor(() => {
            expect(input.value).toBe('Olá raposinha!');
        });
    });
});
