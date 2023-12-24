import React, {
    type ButtonHTMLAttributes,
    type FunctionComponent,
    type PropsWithChildren,
} from 'react';
import * as S from './styles';

const Button: FunctionComponent<
    PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
    const { children, ...rest } = props;

    return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
