import React, {
    ReactElement,
    PropsWithChildren,
    FunctionComponent,
} from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/config';
import 'jest-styled-components';
import { GlobalStyles } from '../theme';

const Providers: FunctionComponent<PropsWithChildren> = (props) => {
    const { children } = props;
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles /> {children}
        </ThemeProvider>
    );
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Providers, ...options });

export default customRender;
