import { GlobalStylesProps } from './global-styles.interface';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle<GlobalStylesProps>((props) => {
    const { $isDarkTheme, theme } = props;
    const { typography, colors } = theme;
    const { fontFamily, baseFontSize } = typography;

    return css`
        :root {
            --raposinha-brown: ${colors.brown};
            --raposinha-earth: ${colors.earth};
            --raposinha-sand: ${colors.sand};
            --raposinha-offwhite: ${colors.offwhite};
            --raposinha-black: ${colors.black};
            --raposinha-white: ${colors.white};

            --raposinha-brown-btn-bg-color: var(--raposinha-brown);
            --raposinha-brown-btn-text-color: var(--raposinha-offwhite);

            --raposinha-earth-btn-bg-color: var(--raposinha-earth);
            --raposinha-earth-btn-text-color: var(--raposinha-offwhite);

            --raposinha-sand-btn-bg-color: var(--raposinha-sand);
            --raposinha-sand-btn-text-color: var(--raposinha-offwhite);

            --raposinha-offwhite-btn-bg-color: var(--raposinha-offwhite);
            --raposinha-offwhite-btn-text-color: var(--raposinha-brown);

            --raposinha-black-btn-bg-color: var(--raposinha-black);
            --raposinha-black-btn-text-color: var(--raposinha-white);

            --raposinha-white-btn-bg-color: var(--raposinha-white);
            --raposinha-white-btn-text-color: var(--raposinha-black);
        }

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
