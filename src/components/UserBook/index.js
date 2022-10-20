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
    // 다른 id에서 모달이 열려있는 상태에서 또 다른 id 모달을 클릭했을 때
    if (showUserMenuModal === true && id !== userMenuModalId) {
      // 바로 선택한 모달이 열리게
      setUserMenuModalId(id);
      return;
    }
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
