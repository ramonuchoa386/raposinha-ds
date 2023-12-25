import styled, { css } from 'styled-components';

export const Button = styled.button((props) => {
    const { theme, children } = props;
    const { colors, typography } = theme;
    const { baseFontSize } = typography;

    return css`
        background-color: ${colors.white};
        color: ${colors.black};
        border: 1px solid ${colors.black};
        padding: ${typeof children === 'string' ? '6px 16px 4px' : '4px'};
        border-radius: 4px;
        font-weight: bold;
        font-size: calc(0.65 * ${baseFontSize});
        letter-spacing: 0.3px;
        text-transform: uppercase;
        transition: all 0.3s ease;

        &:hover {
            transition: all 0.7s ease;
            background-color: ${colors.black};
            color: ${colors.white};
        }
    `;
});
