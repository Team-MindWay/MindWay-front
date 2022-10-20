import * as S from './style';
import { useRecoilState } from 'recoil';
import { UserMenuModalId, ShowBookDeleteModal, ShowUserMenuModal } from 'atoms';
import { useNavigate } from 'react-router-dom';

const UserMenuModal = () => {
  const [userMenuModalId, setUserMenuModalId] = useRecoilState(UserMenuModalId);
  const [showBookDeleteModal, setShowBookDeleteModal] =
    useRecoilState(ShowBookDeleteModal);
  const [showUserMenuModal, setShowUserMenuModal] =
    useRecoilState(ShowUserMenuModal);

  const handleDelete = () => {
    setShowUserMenuModal(!showUserMenuModal);
    setShowBookDeleteModal(true);
  };

  const navigate = useNavigate();
  const handleUpdate = () => {
    setShowUserMenuModal(!showUserMenuModal);
    navigate(`/book/register/${userMenuModalId}`);
  };

  return (
    <S.UserMenuModal>
      <S.Delete onClick={handleDelete}>삭제하기</S.Delete>
      <S.Update onClick={handleUpdate}>수정하기</S.Update>
    </S.UserMenuModal>
  );
};

export default UserMenuModal;
