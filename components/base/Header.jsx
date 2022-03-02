import styles from '../../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <section>
        <h1>
          <a href="/">UPeth</a>
        </h1>
        <nav>
          <a href="/exchange">거래소</a>
          <a href="/balances">입출금</a>
          <a href="/investments/balance">투자내역</a>
          <a href="/trends">코인동향</a>
          <a href="/staking/items">스테이킹</a>
          <a href="/nft">NFT</a>
          <a href="/service_center">고객센터</a>
        </nav>
        <ul>
          <li>
            <a href="/signin">로그인</a>
          </li>
          <li>
            <a href="/signup">회원가입</a>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
