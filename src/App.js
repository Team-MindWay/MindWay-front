import { Route, Routes } from 'react-router-dom';
import * as P from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<P.MainPage />} />
      <Route path="/book/register" element={<P.BookRegisterPage />} />
      <Route path="/user" element={<P.UserPage />} />
    </Routes>
  );
};
export default App;
