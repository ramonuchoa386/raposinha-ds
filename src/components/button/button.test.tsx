import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Button from '.';
import customRender from '../../utils/test-providers';
import userEvent from '@testing-library/user-event';

describe('Testing Button Component', () => {
    test('Check Button Disabled', () => {
        customRender(<Button disabled>Botão</Button>);
        expect(screen.getByRole('button', { name: 'Botão' })).toBeDisabled();
    });

    test('Check button hover effects', async () => {
        customRender(<Button>Botão</Button>);
        const button: HTMLInputElement = screen.getByRole('button', {
            name: 'Botão',
        });

        await userEvent.hover(button);
        expect(button).toHaveStyleRule('background-color', '#FFFFFF');
    });

    describe('Testing Button Layout Padding', () => {
        test('Check padding with text', async () => {
            customRender(<Button>Botão</Button>);
            const button: HTMLInputElement = screen.getByRole('button', {
                name: 'Botão',
            });

            await userEvent.hover(button);
            expect(button).toHaveStyleRule('padding', '6px 16px 4px');
        });

        test('Check padding with icons', async () => {
            customRender(
                <Button>
                    <svg width="100" height="100">
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="green"
                            strokeWidth="4"
                            fill="yellow"
                        />
                    </svg>
                </Button>
            );
            const button: HTMLInputElement = screen.getByRole('button');

            await userEvent.hover(button);
            expect(button).toHaveStyleRule('padding', '4px');
        });
    });
});
