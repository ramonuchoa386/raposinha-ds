/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import theme from '../theme/theme';

type CustomTheme = typeof theme;
declare module 'styled-components' {
    export interface DefaultTheme extends CustomTheme {}
}
