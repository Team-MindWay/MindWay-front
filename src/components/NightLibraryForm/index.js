import * as S from './style';

const NightLibraryForm = () => {
  return (
    <S.Form>
      <S.FormTitle>팀 이름</S.FormTitle>
      <S.FormInput placeholder="팀 이름을 입력해주세요." />
      <S.FormTitle>팀원 학번</S.FormTitle>
      <select>
        {[...Array(3)].map((_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>
      <select>
        {[...Array(4)].map((_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>
      <select>
        {[...Array(20)].map((_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>
    </S.Form>
  );
};

export default NightLibraryForm;
