import styled from '@emotion/styled';

export const Header = styled.header`
  box-sizing: border-box;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4.6vw;
`;

export const NavBox = styled.nav`
  width: 360px;
  display: flex;
`;

export const NavContent = styled.a`
  font-size: 20px;
  text-align: center;
  width: 33%;
  line-height: 40px;
  border-bottom: 2px solid #f4f4f4;
  color: #000000;

  :hover {
    color: #aad1a0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 197px;
`;
