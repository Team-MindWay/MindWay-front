import * as S from './style';
import * as I from 'assets/svg';
import { Header, Title, Input, LinkButton } from 'components';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const BookRegister = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleUpdate = () => {
    console.log('도서 수정 api 호출');
  };

  const handleRegister = () => {
    console.log('도서 신청 api 호출');
  };

  const handleSubmitData = data => {
    console.log(data);
    id ? handleUpdate() : handleRegister();
  };

  const handleError = errors => {
    console.log(errors);
  };

  const getDefaultValue = () => {
    id && console.log('book id api 호출');
    id && setValue('book', '불편한 편의점 2');
    id && setValue('author', '김호연');
    id && setValue('link', 'http://www.yes24.com/Product/Goods/111088149');
  };

  useEffect(() => {
    id && getDefaultValue();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.RegisterSection>
          <S.TitleSection>
            <div>
              <Title sub="new" main={id ? '도서 신청 수정' : '도서 신청 '} />
              <S.Desc>
                신청 전에 도서관에 신청하고자 하는 책이 있는지 확인해주세요.
                <br />
                부적절한 도서 신청시 통보없이 삭제되며, 후에 불이익이 있을 수
                있습니다.
              </S.Desc>
            </div>
            <LinkButton link="/book/list" arrow="right">
              신청현황
            </LinkButton>
          </S.TitleSection>
          <S.Form onSubmit={handleSubmit(handleSubmitData, handleError)}>
            <S.InputSection>
              <div>
                <S.FormTitle>책 제목</S.FormTitle>
                <Input
                  bigwidth={true}
                  placeholder="책 제목을 입력해주세요."
                  register={register('book', {
                    required: '책 제목 입력은 필수입니다.',
                  })}
                  error={errors.book}
                />
              </div>
              <div>
                <S.FormTitle>저자</S.FormTitle>
                <Input
                  bigwidth={true}
                  placeholder="저자를 입력해주세요."
                  register={register('author', {
                    required: '저자 입력은 필수입니다.',
                  })}
                  error={errors.author}
                />
              </div>
              <div>
                <S.FormTitle>링크</S.FormTitle>
                <Input
                  bigwidth={true}
                  placeholder="YES24 링크를 첨부해주세요."
                  register={register('link', {
                    required: '링크 첨부는 필수입니다.',
                  })}
                  error={errors.link}
                />
              </div>
            </S.InputSection>
            <S.RegisterButton> {id ? '수정하기' : '신청하기'}</S.RegisterButton>
          </S.Form>
        </S.RegisterSection>
        <S.Line />
      </S.Container>
    </>
  );
};

export default BookRegister;
