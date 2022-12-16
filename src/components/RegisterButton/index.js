import * as S from './style';

const RegisterButton = ({ children, ...rest }) => {
  return <S.RegisterButton {...rest}>{children}</S.RegisterButton>;
};

export default RegisterButton;
