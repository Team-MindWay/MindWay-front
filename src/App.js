import { Route, Routes } from 'react-router-dom';
import * as P from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/book/register" element={<P.BookRegister />} />
      <Route path="/book/register/:id" element={<P.BookRegister />} />
      <Route path="/user" element={<P.User />} />
      <Route path="/book/list" element={<P.BookList />} />
    </Routes>
  );
};
export default App;
