import { Header, LinkButton, Title, BookInfo } from 'components';
import * as S from './style';

const BookList = () => {
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
  return (
    <>
      <Header />
      <S.BookListSection>
        <S.TitleSection>
          <Title main="도서 신청" sub="new" />
          <LinkButton link="/book/register" arrow="left">
            신청하기
          </LinkButton>
        </S.TitleSection>
        <S.BookInfosection>
          <S.BookInfoHeader>
            <S.HeaderTitle>순번</S.HeaderTitle>
            <S.HeaderTitle>책 제목</S.HeaderTitle>
            <S.HeaderTitle>저자</S.HeaderTitle>
            <S.HeaderTitle>링크</S.HeaderTitle>
          </S.BookInfoHeader>
          <S.BookList>
            {Books.map((book, i) => (
              <BookInfo book={book} key={i} id={i} />
            ))}
          </S.BookList>
        </S.BookInfosection>
        <S.BottomLine />
      </S.BookListSection>
    </>
  );
};

export default BookList;
