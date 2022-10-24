import styled from '@emotion/styled';

const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #aad1a0;
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
`;

const Title = ({ main, sub }) => {
  return (
    <div>
      <SubTitle>{sub}</SubTitle>
      <MainTitle>{main}</MainTitle>
    </div>
  );
};

export default Title;
