import { GlobalStylesProps } from 'global-styles';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle<GlobalStylesProps>((props) => {
    const { $isDarkTheme } = props;

    return css`
        body {
            color: ${$isDarkTheme ? 'white' : 'black'};
        }
    `;
});

export default GlobalStyles;
