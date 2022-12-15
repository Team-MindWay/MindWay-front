/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RegisterButton from 'components/RegisterButton';
import * as S from './style';
import * as I from 'assets/svg';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const NightLibraryForm = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [members, setMembers] = useState([]);

  const addMember = e => {
    e.preventDefault();
    if (watch('number').length === 1) {
      setValue('number', 0 + watch('number'));
    }

    const 학번 =
      watch('grade') + watch('class') + watch('number') + ' ' + watch('name');
    setMembers(members.concat(학번));
    setValue('grade', '선택');
    setValue('class', '선택');
    setValue('number', '선택');
    setValue('name', '');
  };

  const deleteMember = index => {
    setMembers(members.filter((v, i) => index !== i));
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
          {...register('team', { required: true })}
        />
      </div>
      <div>
        <S.FormTitle>팀원 학번</S.FormTitle>
        <S.SelectSection>
          <S.Select {...register('grade', { required: true })}>
            <option value={null}>선택</option>
            {[...Array(3)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </S.Select>
          학년
          <S.Select {...register('class', { required: true })}>
            <option>선택</option>
            {[...Array(4)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </S.Select>
          반
          <S.Select {...register('number', { required: true })}>
            <option>선택</option>
            {[...Array(20)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </S.Select>
          번
          <S.FormInput
            placeholder="이름을 입력하세요."
            {...register('name', { required: true })}
          />
          <S.ButtonWrapper onClick={addMember}>
            <I.RegisterButton />
          </S.ButtonWrapper>
        </S.SelectSection>
        <S.MemberSection>
          {members?.map((member, index) => (
            <S.Member key={index}>
              {member}
              <S.DeleteButtonWrapper onClick={() => deleteMember(index)}>
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
