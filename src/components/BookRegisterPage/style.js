import styled from '@emotion/styled';

export const Container = styled.div`
  width: 688px;
  margin: 0 auto;
`;

export const RegisterSection = styled.div`
  width: 548px;
  margin: 0 auto;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const Desc = styled.p`
  color: #8f8f8f;
  font-size: 12px;
`;

export const Form = styled.form`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 437px;
`;

export const FormTitle = styled.h1`
  position: relative;
  font-size: 24px;
  margin-bottom: 12px;

  &::after {
    display: inline-block;
    background-size: 10px 10px;
    width: 20px;
    height: 20px;
    content: '';
    position: absolute;
    background-color: #6e8f66;
    border-radius: 50%;
    left: -79px;
  }
`;

export const ErrorMessage = styled.p`
  color: #e53a3a;
  margin-top: 7px;
  font-size: 12px;
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  width: 2px;
  height: 620px;

  background-color: #6e8f66;
  border-radius: 4px;
`;
