import { Route, Routes } from 'react-router-dom';
import * as P from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<P.MainPage />} />
      <Route path="/book/register" element={<P.BookRegisterPage />} />
    </Routes>
  );
};
export default App;
