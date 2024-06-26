import { Title, EventModal } from 'components';
import { useEffect, useState } from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { ShowEventModal } from 'atoms';

const Event = () => {
  const [isEvent, setIsEvent] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    console.log('이벤트 가져오기 api');
    setData({
      title: '가을 독서 행사',
      content:
        '독서의 계절, 가을을 맞아 도서관에서 특별한 이벤트를 준비했습니다. 랜덤으로 초성 책 제목이 적혀있는 쪽지를 뽑고, 그에 맞는 책을 찾아오면 푸짐한 선물 뽑기를 할 수 있습니다. 점심시간마다 진행할 예정이니 많은 관심 바랍니다.',
      start_date: '20220919',
      end_date: '20220921',
      image:
        'data:image/jpeg;base64,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',
    });
  }, []);

  useEffect(() => {
    setIsEvent(data ? true : false);
  }, [data]);
  const [showEventModal, setShowEventModal] = useRecoilState(ShowEventModal);

  const handleModal = () => {
    setShowEventModal(isEvent ? !showEventModal : false);
  };
  return (
    <S.EventWrapper>
      <div>
        <Title main="이달의 이벤트" sub="Event" />
        <S.Event onClick={handleModal}>
          {isEvent ? (
            <>
              <img src={data.image} className="EventImage" />
              <S.ContentSection>
                <S.Title>{data.title}</S.Title>
                <S.Content>{data.content}</S.Content>
                <S.Date>2022년 10월 31일</S.Date>
              </S.ContentSection>
            </>
          ) : (
            <>
              <img src="/ShortLogo.png" />
              <p>이번 달 이벤트는 없어요</p>
            </>
          )}
        </S.Event>
        {showEventModal && <EventModal data={data} />}
      </div>
      <hr />
    </S.EventWrapper>
  );
};

export default Event;
