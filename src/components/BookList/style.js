import styled from '@emotion/styled';

export const BookListSection = styled.div`
  padding: 0 15vw;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 70px;
  padding-left: 35px;
`;

export const BookInfoHeader = styled.div`
  box-shadow: 0px 20px 20px -20px rgba(121, 121, 121, 0.25);
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.p`
  font-size: 18px;
  line-height: 70px;

  &:nth-of-type(1) {
    text-align: center;
    width: 100px;
  }
  &:nth-of-type(2) {
    width: 500px;
  }
  &:nth-of-type(3) {
    width: 300px;
  }
  &:nth-of-type(4) {
    width: 500px;
  }
`;

export const BookList = styled.div`
  padding: 50px 0px;
  height: 600px;
  overflow-y: scroll;
`;

export const BottomLine = styled.div`
  box-shadow: 0px -20px 20px -16px rgb(121 121 121 / 25%);
  height: 40px;
  width: 100%;
  background-color: #ffffff;
`;
