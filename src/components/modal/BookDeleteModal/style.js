import styled from '@emotion/styled';

export const Background = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookDeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 758px;
  height: 375px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 70px 0 50px;
`;

export const Question = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

export const BookName = styled.div`
  width: 506px;
  height: 72px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  background-color: #f4f4f4;
  border-radius: 20px;
  color: #000000;
  text-align: center;
  line-height: 72px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 460px;
  font-weight: 400;
  line-height: 29px;
  button {
    font-size: 24px;
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
`;

export const Cancle = styled.button`
  color: #000000;
`;

export const Delete = styled.button`
  color: #e63a3a;
`;
