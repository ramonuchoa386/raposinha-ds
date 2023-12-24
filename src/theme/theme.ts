import colorPalette from './color-pallete';

const defaultSetting = {
    fontFamily: '',
    baseFontSize: '',
    layouts: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1024px',
        desktopLarge: '1366px',
    },
};

const theme = {
    name: 'DEFAULT',
    ...defaultSetting,
    colors: {
        ...colorPalette,
    },
};

export default theme;
