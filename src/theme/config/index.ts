import { CustomTheme } from './theme.interface';
import colorPalette, { ColorPalette } from './colorpalette';
import typography, { ThemeTypography } from './typography';
import breakpoints, { ThemeBreakpoints } from './breakpoints';

const theme: CustomTheme = {
    name: 'LIGHT',
    breakpoints: breakpoints,
    typography: typography,
    colors: colorPalette,
};

const invertTheme: CustomTheme = {
    ...theme,
    colors: {
        black: colorPalette.white,
        brown: colorPalette.sand,
        earth: colorPalette.offwhite,
        offwhite: colorPalette.earth,
        sand: colorPalette.brown,
        white: colorPalette.black,
    },
};

export { invertTheme, colorPalette, typography, breakpoints };
export type { CustomTheme, ColorPalette, ThemeTypography, ThemeBreakpoints };
export default theme;
