import React, { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Block, SignInStatus } from './Header.styles';

function Header() {
  const router = useRouter();
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
      <section>
        <h1>
          <Link href='/'>UPeth</Link>
        </h1>
        <nav>
          <Link href='/exchange?code=KRW-BTC'>
            <a className={router.pathname === '/exchange' ? 'active' : ''}>
              거래소
            </a>
          </Link>
          <Link href='/balances'>
            <a className={router.pathname === '/balances' ? 'active' : ''}>
              입출금
            </a>
          </Link>
          <Link href='/investments/balance'>
            <a
              className={
                router.pathname === '/investments/balance' ? 'active' : ''
              }
            >
              투자내역
            </a>
          </Link>
          <Link href='/trends'>
            <a className={router.pathname === '/trends' ? 'active' : ''}>
              코인동향
            </a>
          </Link>
          <Link href='/staking/items'>
            <a className={router.pathname === '/staking/items' ? 'active' : ''}>
              스테이킹
            </a>
          </Link>
          <Link href='/nft'>
            <a className={router.pathname === '/nft' ? 'active' : ''}>NFT</a>
          </Link>
          <Link href='/service_center'>
            <a
              className={router.pathname === '/service_center' ? 'active' : ''}
            >
              고객센터
            </a>
          </Link>
        </nav>
        <ul>
          {!session ? (
            <li>
              <a href='#' onClick={(e) => handleSignIn(e)}>
                로그인
              </a>
            </li>
          ) : (
            <>
              <SignInStatus>
                <p>
                  <Image
                    src={session.user.image}
                    width='32px'
                    height='32px'
                    alt={session.user.image}
                  />
                  <strong>{session.user.name}</strong>
                </p>
              </SignInStatus>
              <li>
                <a href='#' onClick={(e) => handleSignOut(e)}>
                  로그아웃
                </a>
              </li>
            </>
          )}
        </ul>
      </section>
    </Block>
  );
}

export default Header;
