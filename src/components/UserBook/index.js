import * as S from './style';
import * as I from 'assets/svg';
import { useRecoilState } from 'recoil';
import { BookDeleteId, ShowBookDeleteModal } from 'atoms';
import { useNavigate } from 'react-router-dom';
import { BookDeleteModal } from 'components';

const UserBook = ({ book, id }) => {
  const [showBookDeleteModal, setShowBookDeleteModal] =
    useRecoilState(ShowBookDeleteModal);
  const [bookDeleteId, setBookDeleteId] = useRecoilState(BookDeleteId);

  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/book/register/${id}`);
  };

  const handleDelete = () => {
    setShowBookDeleteModal(true);
    setBookDeleteId(id);
  };

  return (
    <S.UserBookSection>
      <S.Title>{book.title}</S.Title>
      <S.Author>{book.author}</S.Author>
      <S.Link>{book.link}</S.Link>
      <S.MenuWrapper>
        <I.UpdateIcon onClick={handleUpdate} />
        <I.DeleteIcon onClick={handleDelete} />
      </S.MenuWrapper>

      {bookDeleteId === id && showBookDeleteModal && (
        <BookDeleteModal title={book.title} id={bookDeleteId} />
      )}
    </S.UserBookSection>
  );
};

export default UserBook;
