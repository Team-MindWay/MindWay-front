/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RegisterButton from 'components/RegisterButton';
import * as S from './style';
import * as I from 'assets/svg';
import { useState } from 'react';

const NightLibraryForm = () => {
  const [members, setMembers] = useState([1]);
  const addMember = () => {
    setMembers(members.concat('2322'));
  };
  return (
    <S.Form>
      <div>
        <S.FormTitle>팀 이름</S.FormTitle>
        <S.FormInput
          css={css`
            margin-bottom: 50px;
          `}
          placeholder="팀 이름을 입력하세요."
        />
      </div>
      <div>
        <S.FormTitle>팀원 학번</S.FormTitle>
        <S.SelectSection>
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
          <S.FormInput placeholder="이름을 입력하세요." />
          <S.ButtonWrapper onClick={addMember}>
            <I.RegisterButton />
          </S.ButtonWrapper>
        </S.SelectSection>
        <S.MemberSection>
          {members?.map((member, index) => (
            <S.Member key={index}>
              {member}
              <S.DeleteButtonWrapper>
                <I.DeleteMemberButton />
              </S.DeleteButtonWrapper>
            </S.Member>
          ))}
        </S.MemberSection>
      </div>

      <RegisterButton>신청하기</RegisterButton>
    </S.Form>
  );
};

export default NightLibraryForm;
