import styled from '@emotion/styled';

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;

  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  hr {
    width: 38px;
    height: 6px;
    background: #aad1a0;
    border-radius: 6px;
    border: none;
  }

  img {
    width: 100%;
    height: 500px;
    filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    margin: 50px 0;
  }
`;

export const EventModal = styled.div`
  overflow: scroll;
  width: 694px;
  height: 970px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 90px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
`;

export const Date = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

export const Content = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  overflow: scroll;
`;
