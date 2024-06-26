import { ShowBookDeleteModal } from 'atoms';
import { useRecoilState } from 'recoil';
import * as S from './style';

const BookDeleteModal = ({ title, id }) => {
  const [showBookDeleteModal, setShowBookDeleteModal] =
    useRecoilState(ShowBookDeleteModal);

  const handleBookDelete = () => {
    console.log('신청도서 삭제하기 api');

    setShowBookDeleteModal(!showBookDeleteModal);
  };
  return (
    <S.Background>
      <S.BookDeleteModal>
        <S.Question>신청하신 도서를 삭제하시겠습니까?</S.Question>
        <S.BookName>{title}</S.BookName>
        <S.ButtonBox>
          <S.Cancle
            onClick={() => setShowBookDeleteModal(!showBookDeleteModal)}
          >
            취소하기
          </S.Cancle>
          <S.Delete onClick={handleBookDelete}>삭제하기</S.Delete>
        </S.ButtonBox>
      </S.BookDeleteModal>
    </S.Background>
  );
};

export default BookDeleteModal;
