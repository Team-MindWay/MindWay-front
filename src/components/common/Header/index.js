import * as S from './style';
import * as I from 'assets/svg';
import { useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Header = () => {
  const { pathname } = useLocation();
  const select = path =>
    pathname === path && css({ borderBottom: '2px solid #aad1a0' });

  return (
    <S.Header>
      <I.Logo />
      <S.NavBox>
        <S.NavContent href="/" css={select('/')}>
          메인
        </S.NavContent>
        <S.NavContent href="/book/register" css={select('/book/register')}>
          도서신청
        </S.NavContent>
        <S.NavContent href="/about" css={select('/about')}>
          프로젝트
        </S.NavContent>
      </S.NavBox>
      <S.IconWrapper>
        <I.UserIcon />
      </S.IconWrapper>
    </S.Header>
  );
};

export default Header;
