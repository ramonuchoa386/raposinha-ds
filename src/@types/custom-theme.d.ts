declare module 'custom-theme' {
    export interface CustomTheme {
        name: 'LIGHT' | 'DARK';
        typography: {
            fontFamily: string;
            baseFontSize: string;
        };
        colors: ColorPalette;
    }
}
