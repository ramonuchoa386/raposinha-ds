import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, screen } from '@testing-library/react';
import Button from '.';
import customRender from '../../utils/test-providers';

describe('Testing Button Component', () => {
    afterEach(cleanup);

    test('Check Button Disabled', () => {
        customRender(
            <Button data-testid="test01" disabled>
                Botão
            </Button>
        );
        const element = screen.getByTestId('test01');

        expect(element).toBeDisabled();
    });

    test('Check button hover effects', () => {
        customRender(<Button data-testid="test02">Botão</Button>);
        const element = screen.getByTestId('test02');

        expect(element).toHaveStyleRule(
            'background-color',
            'var(--raposinha-brown-btn-text-color)',
            {
                modifier: ':hover',
            }
        );
    });

    describe('Testing Button Layout Padding', () => {
        test('Check padding with text', () => {
            customRender(<Button data-testid="test03">Botão</Button>);
            const element = screen.getByTestId('test03');

            expect(element).toHaveStyleRule('padding', '6px 16px 4px');
        });

        test('Check padding with icons', () => {
            customRender(
                <Button data-testid="test04">
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
            const element = screen.getByTestId('test04');

            expect(element).toHaveStyleRule('padding', '4px');
        });
    });

    describe('Testing Button theming', () => {
        test('Should render default brown theme', () => {
            customRender(<Button data-testid="test05">Botão</Button>);
            const element = screen.getByTestId('test05');

            expect(element).toHaveStyleRule(
                'background-color',
                'var(--raposinha-brown-btn-bg-color)'
            );
        });

        test('Should render Offwhite theme', () => {
            customRender(
                <Button data-testid="test06" $buttonTheme="offwhite">
                    Botão
                </Button>
            );
            const element = screen.getByTestId('test06');

            expect(element).toHaveStyleRule(
                'background-color',
                'var(--raposinha-offwhite-btn-bg-color)'
            );
        });

        test('Should render White theme', () => {
            customRender(
                <Button data-testid="test07" $buttonTheme="white">
                    Botão
                </Button>
            );
            const element = screen.getByTestId('test07');

            expect(element).toHaveStyleRule(
                'background-color',
                'var(--raposinha-white-btn-bg-color)'
            );
        });

        test('Should render Black theme', () => {
            customRender(
                <Button data-testid="test08" $buttonTheme="black">
                    Botão
                </Button>
            );
            const element = screen.getByTestId('test08');

            expect(element).toHaveStyleRule(
                'background-color',
                'var(--raposinha-black-btn-bg-color)'
            );
        });
    });
});
