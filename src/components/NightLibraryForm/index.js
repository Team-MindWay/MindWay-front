/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RegisterButton from 'components/RegisterButton';
import * as S from './style';
import * as I from 'assets/svg';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const NightLibraryForm = ({ place }) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [members, setMembers] = useState([]);

  const deleteMember = index => {
    setMembers(members.filter((v, i) => index !== i));
  };

  const handleSubmitData = data => {
    console.log(data);
    if (watch('number').length === 1) {
      setValue('number', 0 + watch('number'));
    }

    const 학번 =
      watch('grade') + watch('class') + watch('number') + ' ' + watch('name');
    setValue('grade', '선택');
    setValue('class', '선택');
    setValue('number', '선택');
    setValue('name', '');
    setMembers(members.concat(학번));
  };

  const handleError = errors => {
    console.log(errors);
  };

  const registerNightLibrary = () => {
    members.length >= 1 && console.log('자습신청 api');
  };

  useEffect(() => {
    console.log(place);
    console.log('자습 현황 보기 api 요청');
  }, []);

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitData, handleError)}>
      <div>
        <S.FormTitle>팀 이름</S.FormTitle>
        <S.FormInput
          {...register('team', { required: true })}
          css={css`
            margin-bottom: 50px;
            border-bottom: ${errors.team && ' 2px solid #E53A3A;'};
          `}
          placeholder="팀 이름을 입력하세요."
        />
      </div>
      <div>
        <S.FormTitle>팀원 학번</S.FormTitle>
        <S.SelectSection>
          <S.Select
            {...register('grade', {
              required: true,
              validate: {
                unSelected: value => value !== '선택',
              },
            })}
          >
            <option>선택</option>
            {[...Array(3)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </S.Select>
          학년
          <S.Select
            {...register('class', {
              required: true,
              validate: {
                unSelected: value => value !== '선택',
              },
            })}
          >
            <option>선택</option>
            {[...Array(4)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </S.Select>
          반
          <S.Select
            {...register('number', {
              required: true,
              validate: {
                unSelected: value => value !== '선택',
              },
            })}
          >
            <option>선택</option>
            {[...Array(20)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </S.Select>
          번
          <S.FormInput
            {...register('name', { required: true })}
            placeholder="이름을 입력하세요."
            css={css`
              border-bottom: ${errors.name && ' 2px solid #E53A3A;'};
            `}
          />
          <S.ButtonWrapper>
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

      <RegisterButton type="button" onClick={registerNightLibrary}>
        신청하기
      </RegisterButton>
    </S.Form>
  );
};

export default NightLibraryForm;
