import * as S from './style';

const BookInfo = ({ book, id }) => {
  return (
    <S.BookInfo>
      <S.Id>{id}</S.Id>
      <S.Title>{book.title}</S.Title>
      <S.Author>{book.author}</S.Author>
      <S.Link>{book.link}</S.Link>
    </S.BookInfo>
  );
};

export default BookInfo;
