import styled from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid black;
  padding: 12px 4px;

  &:required {
    border-color: red;
  }
`;
