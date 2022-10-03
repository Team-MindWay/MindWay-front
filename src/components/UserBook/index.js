import * as S from './style';
import * as I from 'assets/svg';
import { UserMenuModal, BookDeleteModal } from 'components';
import { useRecoilState } from 'recoil';
import { UserMenuModalId, ShowBookDeleteModal, ShowUserMenuModal } from 'atoms';

const UserBook = ({ book, id }) => {
  const [userMenuModalId, setUserMenuModalId] = useRecoilState(UserMenuModalId);
  const [showBookDeleteModal, setShowBookDeleteModal] =
    useRecoilState(ShowBookDeleteModal);
  const [showUserMenuModal, setShowUserMenuModal] =
    useRecoilState(ShowUserMenuModal);

  const handleUserMenuModal = () => {
    setShowUserMenuModal(!showUserMenuModal);
    setUserMenuModalId(id);
  };

  return (
    <S.UserBookSection>
      <S.Title>{book.title}</S.Title>
      <S.Author>{book.author}</S.Author>
      <S.Link>{book.link}</S.Link>
      <S.MenuWrapper onClick={handleUserMenuModal}>
        <I.MeatballsMenu />
      </S.MenuWrapper>
      {userMenuModalId === id && showUserMenuModal && <UserMenuModal />}
      {userMenuModalId === id && showBookDeleteModal && <BookDeleteModal />}
    </S.UserBookSection>
  );
};

export default UserBook;
