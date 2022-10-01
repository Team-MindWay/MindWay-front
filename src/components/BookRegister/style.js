import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const RegisterSection = styled.div`
  width: 528px;
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

export const Link = styled.a`
  width: 160px;
  height: 44px;
  background-color: #ffffff;
  border: 2px solid #618259;
  border-radius: 50px;

  font-size: 18px;
  color: #618259;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 12px;

  &::before {
    display: inline-block;
    background-size: 10px 10px;
    width: 20px;
    height: 20px;
    content: '';
    position: absolute;
    right: 66.5vw;
    background-color: #6e8f66;
    border-radius: 50%;
  }
`;

export const ErrorMessage = styled.p`
  color: #e53a3a;
  margin-top: 7px;
  font-size: 12px;
`;

export const RegisterButton = styled.button`
  display: block;
  margin-left: auto;
  width: 160px;
  height: 44px;
  background-color: #ffffff;
  border: 2px solid #aad1a0;
  border-radius: 50px;
  font-size: 18px;
  color: #6e8f66;
  cursor: pointer;

  &:hover {
    background: #6e8f66;
    border: 2px solid #6e8f66;
    border-radius: 50px;
    color: #ffffff;
  }
`;

export const LineSection = styled.div``;

export const Line = styled.div`
  top: 0;
  left: 33vw;
  position: absolute;
  width: 2px;
  height: 620px;

  background: #6e8f66;
  border-radius: 4px;
`;
