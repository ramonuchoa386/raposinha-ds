import { GlobalStylesProps } from './global-styles.interface';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle<GlobalStylesProps>((props) => {
    const { $isDarkTheme, theme } = props;
    const { typography } = theme;
    const { fontFamily, baseFontSize } = typography;

    return css`
        * {
            box-sizing: border-box;
            font-family: ${fontFamily};
        }

        body {
            color: ${$isDarkTheme ? 'white' : 'black'};
            font-size: ${baseFontSize};
        }
    `;
});

export { type GlobalStylesProps };
export default GlobalStyles;
