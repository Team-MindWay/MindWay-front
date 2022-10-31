import { ShowEventModal } from 'atoms';
import { useRecoilState } from 'recoil';
import * as S from './style';

const EventModal = ({ data }) => {
  const [showEventModal, setShowEventModal] = useRecoilState(ShowEventModal);

  return (
    <S.Background onClick={() => setShowEventModal(!showEventModal)}>
      <S.EventModal onClick={e => e.stopPropagation()}>
        <hr />
        <S.Title>{data.title}</S.Title>
        <S.Date>
          {data.start_date} ~ {data.end_date}
        </S.Date>
        <img src={data.image} />
        <S.Content>
          {data.content}
          {data.content}
          {data.content}
          {data.content}
        </S.Content>
      </S.EventModal>
    </S.Background>
  );
};

export default EventModal;
