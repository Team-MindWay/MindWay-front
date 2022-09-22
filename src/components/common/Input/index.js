import * as S from './style';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { shake } from 'shared/Animation';

const Input = ({ bigwidth = false, placeholder, register, error }) => {
  const errorAnimation = () =>
    css({
      animation: `${shake} 0.3s`,
    });
  return (
    <>
      <S.Input
        placeholder={placeholder}
        {...register}
        css={css`
          width: ${bigwidth ? '500px' : '400px'};
          border: ${error && ' 2px solid #E53A3A;'};
        `}
      />
      <S.ErrorMessage css={error && errorAnimation}>
        {error?.message}
      </S.ErrorMessage>
    </>
  );
};

export default Input;
