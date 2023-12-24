import React, { Fragment } from 'react';
import type { Preview, ReactRenderer, StoryFn } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import theme, { invertTheme } from '../src/theme/theme';
import GlobalStyles from '../src/theme';

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
            <GlobalStyles />
            <Story />
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
