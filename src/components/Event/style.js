import styled from '@emotion/styled';

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 676px;
  width: 416px;
  border-radius: 20px;
  box-shadow: 2px 4px 30px rgba(121, 121, 121, 0.25);
  border-radius: 20px;
  margin-top: 80px;
  cursor: pointer;
  img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    height: 50%;
  }
`;

export const Image = styled.div``;

export const ContentSection = styled.div`
  display: flex;
  height: 50%;
  padding: 36px 42px;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const Content = styled.p`
  font-size: 15px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* ellipsis line */
  -webkit-box-orient: vertical;
`;

export const Date = styled.p`
  font-size: 15px;
  color: #8f8f8f;
  margin-top: auto;
`;
