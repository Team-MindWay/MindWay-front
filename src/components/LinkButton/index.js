import * as S from './style';
import * as I from 'assets/svg';

const LinkButton = ({ link, children, arrow }) => {
  return (
    <>
      {arrow === 'left' && (
        <S.Link href={link}>
          <I.LeftArrow />
          {children}
        </S.Link>
      )}
      {arrow === 'right' && (
        <S.Link href={link}>
          {children}
          <I.RightArrow />
        </S.Link>
      )}
    </>
  );
};

export default LinkButton;
