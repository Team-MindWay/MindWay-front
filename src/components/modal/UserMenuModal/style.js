import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const flipOver = keyframes`
  0% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
`;

export const UserMenuModal = styled.div`
  position: absolute;
  z-index: 2;
  right: 14.5vw;
  width: 127px;
  height: 84px;
  background-color: #ffffff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-size: 20px;
  line-height: 24px;
  font-weight: 400;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  animation: 0.4s ${flipOver} ease-in-out;
`;

export const Delete = styled.div`
  color: #e53a3a;
  cursor: pointer;
`;

export const Update = styled.div`
  cursor: pointer;
`;
