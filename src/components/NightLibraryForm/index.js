/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RegisterButton from 'components/RegisterButton';
import * as S from './style';

const NightLibraryForm = () => {
  return (
    <S.Form>
      <div>
        <S.FormTitle>팀 이름</S.FormTitle>
        <S.FormInput
          css={css`
            margin-bottom: 50px;
          `}
          placeholder="팀 이름을 하세요."
        />
      </div>
      <div>
        <S.FormTitle>팀원 학번</S.FormTitle>
        <S.Select>
          <option>선택</option>
          {[...Array(3)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </S.Select>
        학년
        <S.Select>
          <option>선택</option>
          {[...Array(4)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </S.Select>
        반
        <S.Select>
          <option>선택</option>
          {[...Array(20)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </S.Select>
        번
        <S.FormInput placeholder="이름을 하세요." />
      </div>

      <RegisterButton>신청하기</RegisterButton>
    </S.Form>
  );
};

export default NightLibraryForm;
