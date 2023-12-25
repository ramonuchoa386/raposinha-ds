const breakpoints = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    desktopLarge: '1366px',
};

export type ThemeBreakpoints = keyof typeof breakpoints;
export default breakpoints;
