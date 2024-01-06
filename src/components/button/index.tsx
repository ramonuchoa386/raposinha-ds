import React, {
    type ButtonHTMLAttributes,
    type FunctionComponent,
    type PropsWithChildren,
} from 'react';
import * as S from './styles';

const Button: FunctionComponent<
    PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> & S.IButtonProps
> = (props) => {
    const { children, $buttonTheme, ...rest } = props;

    return (
        <S.Button $buttonTheme={$buttonTheme} {...rest}>
            {children}
        </S.Button>
    );
};

export default Button;
