import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Button from '.';
import customRender from '../../utils/test-providers';

describe('Testing Button Component', () => {
    test('Check Button Disabled', () => {
        customRender(<Button disabled>Botão</Button>);
        expect(screen.getByRole('button', { name: 'Botão' })).toBeDisabled();
    });
});
