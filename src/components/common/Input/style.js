import styled from '@emotion/styled';

export const Input = styled.input`
  width: 528px;
  height: 57px;
  box-sizing: border-box;

  background: #ffffff;
  border: 2px solid #aad1a0;
  box-shadow: 1px 2px 3px rgba(121, 121, 121, 0.25);
  border-radius: 10px;

  padding-left: 20px;
  font-size: 18px;
  outline: none;

  &:focus {
    border: 2px solid #6f8e67;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

export const ErrorMessage = styled.p`
  color: #e53a3a;
  margin-top: 7px;
  font-size: 12px;
  position: absolute;
`;
