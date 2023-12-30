export interface CustomTheme {
    name: 'LIGHT' | 'DARK';
    typography: {
        fontFamily: string;
        baseFontSize: string;
    };
    colors: { [key: string]: string };
    breakpoints: {
        mobile: string;
        tablet: string;
        desktop: string;
        desktopLarge: string;
    };
}
