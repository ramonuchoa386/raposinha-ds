import { CustomTheme } from 'custom-theme';
import colorPalette from './color-pallete';
import typography from './typography';

const defaultSetting = {
    layouts: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1024px',
        desktopLarge: '1366px',
    },
};

const theme: CustomTheme = {
    name: 'LIGHT',
    ...defaultSetting,
    typography: typography,
    colors: {
        ...colorPalette,
    },
};

export const invertTheme = {
    name: 'DEFAULT_INVERT',
    ...defaultSetting,
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

export default theme;
