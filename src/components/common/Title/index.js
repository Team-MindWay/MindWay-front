import * as S from './style';

const Title = ({ main, sub }) => {
  return (
    <div>
      <S.SubTitle>{sub}</S.SubTitle>
      <S.MainTitle>{main}</S.MainTitle>
    </div>
  );
};

export default Title;
