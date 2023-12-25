declare module 'custom-theme' {
    export interface CustomTheme {
        name: 'LIGHT' | 'DARK';
        typography: {
            fontFamily: string;
            baseFontSize: string;
        };
        colors: ColorPalette;
        breakpoints: {
            mobile: string;
            tablet: string;
            desktop: string;
            desktopLarge: string;
        };
    }
}
