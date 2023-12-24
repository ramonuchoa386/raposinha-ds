import React, { type FunctionComponent, type InputHTMLAttributes } from 'react';
import * as S from './styles';

const Input: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = (
    props
) => {
    return <S.Input {...props} />;
};

export default Input;
