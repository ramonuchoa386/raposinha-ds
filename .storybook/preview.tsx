import React, { Fragment } from 'react';
import type { Preview, ReactRenderer, StoryFn } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { invertTheme } from '../src/theme';
import theme from '../src/theme/config';
import GlobalStyles from '../src/theme/global';

const decorators = [
    withThemeFromJSXProvider<ReactRenderer>({
        themes: {
            light: theme,
            dark: invertTheme,
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles: GlobalStyles,
    }),
    (Story: StoryFn) => (
        <Fragment>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Story />
            </ThemeProvider>
        </Fragment>
    ),
];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: decorators,
};

export default preview;
