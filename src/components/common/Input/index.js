import * as S from './style';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Input = ({ bigwidth, placeholder, register }) => {
  return (
    <S.Input
      placeholder={placeholder}
      {...register}
      css={css`
        width: 400px;
      `}
    />
  );
};

export default Input;
