import React, { type FunctionComponent, type InputHTMLAttributes } from 'react';
import * as S from './styles';

const Input: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = (
    props
) => {
    const { required } = props;

    return (
        <S.InputWrapper>
            <S.Input {...props} />
            {required && <S.RequiredIcon>i</S.RequiredIcon>}
        </S.InputWrapper>
    );
};

export default Input;
