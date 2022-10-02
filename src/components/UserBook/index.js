import * as S from './style';
import * as I from 'assets/svg';

const UserBook = ({ book }) => {
  return (
    <S.UserBookSection>
      <S.Title>{book.title}</S.Title>
      <S.Author>{book.author}</S.Author>
      <S.Link>{book.link}</S.Link>
      <I.MeatballsMenu />
    </S.UserBookSection>
  );
};

export default UserBook;
