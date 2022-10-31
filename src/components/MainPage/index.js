import { Header, Event } from 'components';
import * as S from './style';

const MainPage = () => {
  return (
    <>
      <Header />
      <S.MainPage>
        <Event />
      </S.MainPage>
    </>
  );
};

export default MainPage;
