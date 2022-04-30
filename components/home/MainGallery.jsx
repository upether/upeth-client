import React, { useCallback } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Block, BtnList, BtnA, BtnB } from './styles/MainGallery.styles';

const MainGallery = () => {
  const { data: session } = useSession();

  const handleSignIn = useCallback((e) => {
    e.preventDefault();
    signIn();
  }, []);

  const handleSignOut = useCallback((e) => {
    e.preventDefault();
    signOut();
  }, []);

  return (
    <Block>
      <h1>가장 신뢰받는 글로벌 표준 디지털 자산 거래소</h1>
      <BtnList>
        <Link className='btnA' href='/exchange?code=KRW-BTC'>
          <BtnA>거래소 둘러보기</BtnA>
        </Link>
        {!session ? (
          <a className='btnB' href='#' onClick={(e) => handleSignIn(e)}>
            <BtnB>로그인</BtnB>
          </a>
        ) : (
          <a className='btnB' href='#' onClick={(e) => handleSignOut(e)}>
            <BtnB>로그아웃</BtnB>
          </a>
        )}
      </BtnList>
    </Block>
  );
};

export default MainGallery;
