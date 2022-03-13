import React from 'react';
import Link from 'next/link';
import {
  Block,
  Main,
  Other,
  ErrorMessage,
  InputContainer,
  HelpContainer,
} from './SigninForm.styles';

function SigninForm() {
  return (
    <Block>
      <Main>
        <h1>로그인</h1>
        <ErrorMessage>
          죄송합니다. 이 이메일 주소를 사용하는 계정을 찾을 수 없습니다. 다시
          시도하시거나 <a href="#">새로운 계정을 등록</a>하세요.
        </ErrorMessage>
        <ErrorMessage>
          비밀번호를 잘못 입력하셨습니다. 다시 입력하시거나{' '}
          <a href="#">비밀번호를 재설정</a>하세요.
        </ErrorMessage>
        <form>
          <InputContainer>
            <input type="text" id="email" />
            <label htmlFor="email">이메일 주소</label>
            <div>정확한 이메일 주소를 입력하세요.</div>
          </InputContainer>
          <InputContainer>
            <input type="password" id="password" />
            <label htmlFor="password">비밀번호</label>
            <div>비밀번호는 4 - 60자 사이여야 합니다.</div>
          </InputContainer>
          <button>로그인</button>
        </form>
        <HelpContainer>
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">
              <span>로그인 정보 저장</span>
            </label>
          </div>
          <Link href="/signup">지금 가입하세요</Link>
        </HelpContainer>
      </Main>
      {/* Oauth - Google, Naver, Kakao */}
      <Other></Other>
    </Block>
  );
}

export default SigninForm;
