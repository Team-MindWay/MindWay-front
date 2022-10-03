import * as S from './style';
import * as I from 'assets/svg';
import { useState } from 'react';
import { UserMenuModal } from 'components';

const UserBook = ({ book, id }) => {
  const [showModal, setShowModal] = useState();
  console.log(id);
  return (
    <S.UserBookSection>
      <S.Title>{book.title}</S.Title>
      <S.Author>{book.author}</S.Author>
      <S.Link>{book.link}</S.Link>
      <S.MenuWrapper onClick={() => setShowModal(!showModal)}>
        <I.MeatballsMenu />
      </S.MenuWrapper>
      {showModal && <UserMenuModal />}
    </S.UserBookSection>
  );
};

export default UserBook;
