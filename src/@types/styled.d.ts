/* eslint-disable @typescript-eslint/no-empty-interface */
import { CustomTheme } from '../theme/config/theme.interface';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends CustomTheme {}
}
