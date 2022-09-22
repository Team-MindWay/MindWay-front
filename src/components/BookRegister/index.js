import * as S from './style';
import { Header } from 'components';
import Input from 'components/common/Input';
import { useForm } from 'react-hook-form';

const BookRegister = () => {
  const { register } = useForm();
  return (
    <>
      <Header />
      <Input
        placeholder="책 제목을 입력해주세요."
        register={register('book')}
      />
    </>
  );
};

export default BookRegister;
