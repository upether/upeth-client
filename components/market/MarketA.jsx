import styles from '../../styles/MarketA.module.css';

function MarketA() {
  return (
    <span className={styles.marketA}>
      <div className={`${styles.ty01} ${styles.down}`}>
        <span className={styles.first}>
          <strong>52,850,000</strong>
          <em>KRW</em>
        </span>
        <span className={styles.second}>
          <p>전일대비</p>
          <strong>-0.94%</strong>
          <strong className={styles.upDown}>-500,000</strong>
        </span>
      </div>
      {/* mini chart position */}
      <div className={styles.ty02}>mini chart</div>
      <div className={styles.ty03}>
        <dl className={styles.dl01}>
          <dt>고가</dt>
          <dd>
            <strong className={styles.up}>53,600,000</strong>
          </dd>
          <dt>저가</dt>
          <dd>
            <strong className={styles.down}>52,678,000</strong>
          </dd>
        </dl>
        <dl className={styles.dl02}>
          <dt>거래량(24H)</dt>
          <dd>
            <strong>6,940.385</strong>
            &nbsp;
            <i>BTC</i>
          </dd>
          <dt>거래대금(24H)</dt>
          <dd>
            <strong>371,793,925,104</strong>
            &nbsp;
            <i>KRW</i>
          </dd>
        </dl>
      </div>
    </span>
  );
}

export default MarketA;
