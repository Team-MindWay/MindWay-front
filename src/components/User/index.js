import { Header, UserBook } from 'components';
import { useEffect, useState } from 'react';
import { profileColor } from 'shared/ProfileColor';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';

const User = () => {
  const Books = [
    {
      title: '용의자 X의 헌신',
      author: '히가시노 게이고',
      link: 'http://www.yes24.com/Product/Goods/109308932',
    },
    {
      title: '데미안',
      author: '헤르만 헤세',
      link: 'http://www.yes24.com/Product/Goods/109308932',
    },

    {
      title: '세상의 마지막 기차역',
      author: '무라세 다케시',
      link: 'http://www.yes24.com/Product/Goods/109308932',
    },

    {
      title: '세상의 마지막 기차역',
      author: '무라세 다케시',
      link: 'http://www.yes24.com/Product/Goods/109308932',
    },

    {
      title: '세상의 마지막 기차역',
      author: '무라세 다케시',
      link: 'http://www.yes24.com/Product/Goods/109308932',
    },

    {
      title: '세상의 마지막 기차역',
      author: '무라세 다케시',
      link: 'http://www.yes24.com/Product/Goods/109308932',
    },
    {
      title: '세상의 마지막 기차역',
      author: '무라세 다케시',
      link: 'http://www.yes24.com/Product/Goods/109308932',
    },
  ];

  const [background, setBackground] = useState();

  useEffect(() => {
    const randomColor = profileColor[Math.floor(Math.random() * 4)];
    console.log(randomColor);
    setBackground(randomColor);
  }, []);

  return (
    <>
      <Header />
      <S.UserSection>
        <S.ProfileSection>
          <S.Profile
            css={css`
              background: linear-gradient(${background});
            `}
          />
          <S.UserInfoSection>
            <S.StudentId>2409</S.StudentId>
            <S.Name>양세련</S.Name>
            <S.Email>s21066@gsm.hs.kr</S.Email>
          </S.UserInfoSection>
        </S.ProfileSection>

        <S.BookInfosection>
          <S.BookInfoHeader>
            <S.HeaderTitle>책 제목</S.HeaderTitle>
            <S.HeaderTitle>저자</S.HeaderTitle>
            <S.HeaderTitle>링크</S.HeaderTitle>
          </S.BookInfoHeader>
          <S.UserBookSection>
            {Books.map((book, i) => (
              <UserBook book={book} key={i} id={i} />
            ))}
          </S.UserBookSection>
        </S.BookInfosection>
        <S.BottomLine />
      </S.UserSection>
    </>
  );
};

export default User;
