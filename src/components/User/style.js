import styled from '@emotion/styled';

export const UserSection = styled.div`
  width: 1270px;
  margin: 80px auto 0;
`;

export const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(46.72deg, #aad1a0 14.8%, #f5f5f5 85.49%);
  border-radius: 50%;
`;

export const UserInfoSection = styled.div`
  margin-left: 50px;
`;

export const StudentId = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
`;

export const Email = styled.p`
  margin-top: 25px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

export const BookInfosection = styled.div`
  margin-top: 80px;
`;

export const BookInfoHeader = styled.div`
  padding: 0 60px;
  box-shadow: -8px 20px 20px -20px rgba(121, 121, 121, 0.25);
  display: flex;
`;

export const HeaderTitle = styled.p`
  font-size: 18px;
  line-height: 70px;
  &:nth-of-type(1) {
    width: 450px;
  }
  &:nth-of-type(2) {
    width: 250px;
  }
  &:nth-of-type(3) {
    width: 440px;
  }
`;

export const UserBookSection = styled.div`
  padding: 60px 0 0 60px;
  height: 450px;
  overflow: scroll;
`;
