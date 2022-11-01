import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  position: relative;
  width: 570px;
  animation-name: slidein;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes slidein {
    from {
      right: -500px;
    }
    to {
      right: 0;
    }
  }
`;

export const FormTitle = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #aad1a0;
  outline: none;
  height: 34px;
  width: 225px;
  border-radius: 2px;
`;

export const Select = styled.select`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 37px;
  width: 78px;
  text-align: center;
  border: none;
  border-bottom: 1px solid #aad1a0;
  outline: none;
`;
