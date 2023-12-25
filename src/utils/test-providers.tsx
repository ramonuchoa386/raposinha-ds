import React, {
    ReactElement,
    PropsWithChildren,
    FunctionComponent,
} from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/config';
import 'jest-styled-components';

const AllTheProviders: FunctionComponent<PropsWithChildren> = (props) => {
    const { children } = props;
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export default customRender;
