/* eslint-disable @typescript-eslint/no-empty-interface */
import { CustomTheme } from 'custom-theme';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends CustomTheme {}
}
