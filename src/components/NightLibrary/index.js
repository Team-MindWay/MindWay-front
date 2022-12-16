import { Title, NightLibraryForm } from 'components';
import { useEffect, useState } from 'react';
import * as S from './style';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const NightLibrary = () => {
  const [place, setPlace] = useState();
  const [applicationList, setApplicationList] = useState();

  useEffect(() => {
    console.log('자습신청 리스트 불러오기 api');
    setApplicationList([
      {
        id: '1',
        team: 'MindWay',
        room: '온라인 강의실',
        member: ['2300 주현호', '2100 백혜인', '2100 유시온'],
      },
    ]);
  }, []);

  const nonSelect = room =>
    applicationList?.some(v => v.room === room) &&
    css({ border: '2px solid #C8C8C8', color: '#C8C8C8' });

  const select = room =>
    place === room &&
    css({ background: '#618259', color: '#ffffff', border: 'none' });

  const clickPlace = room => {
    if (applicationList?.some(v => v.room === room)) return alert('이미 신청');
    if (place === room) return setPlace(null);
    setPlace(room);
  };

  return (
    <>
      <div>
        <Title main="야간 도서실 신청" sub="Sign up" />
        <S.ButtonSection>
          <S.RegisterButton
            onClick={() => clickPlace('온라인 강의실')}
            css={select('온라인 강의실') || nonSelect('온라인 강의실')}
          >
            온라인 강의실
          </S.RegisterButton>
          <S.RegisterButton
            onClick={() => clickPlace('학부모 회의실')}
            css={select('학부모 회의실') || nonSelect('학부모 회의실')}
          >
            학부모 회의실
          </S.RegisterButton>
          <S.RegisterButton
            onClick={() => clickPlace('스터디 카페')}
            css={select('스터디 카페') || nonSelect('스터디 카페')}
          >
            스터디 카페
          </S.RegisterButton>
        </S.ButtonSection>
      </div>
      {place && <NightLibraryForm />}
    </>
  );
};

export default NightLibrary;
