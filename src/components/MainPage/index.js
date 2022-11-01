import { Header, Event, NightLibrary } from 'components';
import * as S from './style';
const MainPage = () => {
  return (
    <>
      <Header />
      <S.MainPage>
        <Event />
        <NightLibrary />
      </S.MainPage>
    </>
  );
};

export default MainPage;
