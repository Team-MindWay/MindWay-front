import * as S from './style';
import * as I from 'assets/svg';
import { Header, Title } from 'components';
import Input from 'components/common/Input';
import { useForm } from 'react-hook-form';

const BookRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = data => {
    console.log(data);
  };

  const handleError = errors => {
    console.log(errors);
  };

  return (
    <>
      <S.Container>
        <Header />
        <S.RegisterSection>
          <S.TitleSection>
            <div>
              <Title sub="new" main="도서 신청" />
              <S.Desc>
                신청 전에 도서관에 신청하고자 하는 책이 있는지 확인해주세요.{' '}
                <br />
                부적절한 도서 신청시 통보없이 삭제되며, 후에 불이익이 있을 수
                있습니다.
              </S.Desc>
            </div>
            <S.Link href="/mypage">
              신청현황 <I.Arrow />
            </S.Link>
          </S.TitleSection>
          <S.Form onSubmit={handleSubmit(handleRegister, handleError)}>
            <S.InputSection>
              <div>
                <S.Title>책 제목</S.Title>
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
                <S.Title>저자</S.Title>
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
                <S.Title>링크</S.Title>
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
            <S.RegisterButton>신청하기</S.RegisterButton>
          </S.Form>
          <S.LineSection>
            <S.Line />
          </S.LineSection>
        </S.RegisterSection>
      </S.Container>
    </>
  );
};

export default BookRegister;
