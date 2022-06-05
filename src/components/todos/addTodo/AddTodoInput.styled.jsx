import styled from "styled-components";

export const InputText = styled.input`
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  width: 100%;
  font-size: 24px;
  line-height: 1.4em;
  box-sizing: border-box;
  color: #4d4d4d;

  &::placeholder {
    color: #4d4d4d89;
  }

  &:focus {
    border: none;
  }
`;
