import { ColorPalette } from './colorpalette';

export interface CustomTheme {
    name: 'LIGHT' | 'DARK';
    typography: {
        fontFamily: string;
        baseFontSize: string;
    };
    colors: { [key in ColorPalette]: string };
    breakpoints: {
        mobile: string;
        tablet: string;
        desktop: string;
        desktopLarge: string;
    };
}
