import { CustomTheme } from 'custom-theme';
import colorPalette from './colorpalette';
import typography from './typography';
import breakpoints from './breakpoints';

const theme: CustomTheme = {
    name: 'LIGHT',
    breakpoints: breakpoints,
    typography: typography,
    colors: {
        ...colorPalette,
    },
};

const invertTheme = {
    name: 'DARK',
    breakpoints: breakpoints,
    typography: typography,
    colors: {
        black: colorPalette.white,
        brown: colorPalette.sand,
        earth: colorPalette.offwhite,
        offwhite: colorPalette.earth,
        sand: colorPalette.brown,
        white: colorPalette.black,
    },
};

export * from './colorpalette';
export * from './typography';
export * from './breakpoints';
export { invertTheme };
export default theme;
