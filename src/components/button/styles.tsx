import styled, { css } from 'styled-components';
import { ColorPalette } from '../../theme';

export interface IButtonProps {
    $buttonTheme?: ColorPalette;
}

export const Button = styled.button<IButtonProps>((props) => {
    const { children, $buttonTheme = 'brown' } = props;

    return css`
        background-color: var(--raposinha-${$buttonTheme}-btn-bg-color);
        color: var(--raposinha-${$buttonTheme}-btn-text-color);
        border: 1px solid
            ${$buttonTheme === 'white'
                ? 'var(--raposinha-black-btn-bg-color)'
                : `var(--raposinha-${$buttonTheme}-btn-bg-color)`};
        padding: ${typeof children === 'string' ? '6px 16px 4px' : '4px'};
        border-radius: 4px;
        font-weight: bold;
        font-size: 0.75rem;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        transition: all 0.3s ease;

        &:hover {
            transition: all 0.7s ease;
            background-color: ${$buttonTheme === 'white'
                ? 'var(--raposinha-black-btn-bg-color)'
                : `var(--raposinha-${$buttonTheme}-btn-text-color)`};
            border-color: ${$buttonTheme === 'black'
                ? 'var(--raposinha-black-btn-bg-color)'
                : `var(--raposinha-${$buttonTheme}-btn-text-color)`};
            color: var(--raposinha-${$buttonTheme}-btn-bg-color);
        }
    `;
});
