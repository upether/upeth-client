import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Block } from './Header.styles';

function Header() {
  const router = useRouter();

  return (
    <Block>
      <section>
        <h1>
          <Link href="/">UPeth</Link>
        </h1>
        <nav>
          <Link href="/exchange?code=KRW-BTC">
            <a className={router.pathname === '/exchange' ? 'active' : ''}>
              거래소
            </a>
          </Link>
          <Link href="/balances">
            <a className={router.pathname === '/balances' ? 'active' : ''}>
              입출금
            </a>
          </Link>
          <Link href="/investments/balance">
            <a
              className={
                router.pathname === '/investments/balance' ? 'active' : ''
              }
            >
              투자내역
            </a>
          </Link>
          <Link href="/trends">
            <a className={router.pathname === '/trends' ? 'active' : ''}>
              코인동향
            </a>
          </Link>
          <Link href="/staking/items">
            <a className={router.pathname === '/staking/items' ? 'active' : ''}>
              스테이킹
            </a>
          </Link>
          <Link href="/nft">
            <a className={router.pathname === '/nft' ? 'active' : ''}>NFT</a>
          </Link>
          <Link href="/service_center">
            <a
              className={router.pathname === '/service_center' ? 'active' : ''}
            >
              고객센터
            </a>
          </Link>
        </nav>
        <ul>
          <li>
            <Link href="/signin">로그인</Link>
          </li>
          <li>
            <Link href="/signup">회원가입</Link>
          </li>
        </ul>
      </section>
    </Block>
  );
}

export default Header;
