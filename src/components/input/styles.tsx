import styled from 'styled-components';

export const Input = styled.input`
    background-color: ${(props) => props.theme.colors.offwhite};
    color: ${(props) => props.theme.colors.brown};
    border: 1px solid ${(props) => props.theme.colors.sand};
    border-radius: 4px;
    padding: 14px;
    position: relative;

    &::placeholder {
        color: ${(props) => props.theme.colors.sand};
    }

    &:focus {
        outline: none;
    }

    &:required {
        border-color: ${(props) => props.theme.colors.brown};
    }
`;

export const RequiredIcon = styled.span`
    width: 16px;
    height: 16px;
    border-radius: 32px;
    color: ${(props) => props.theme.colors.brown};
    border: 1px solid ${(props) => props.theme.colors.brown};
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: fit-content;
`;
