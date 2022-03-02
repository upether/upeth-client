import styles from '../../styles/TitA.module.css';

function TitA() {
  return (
    <span className={styles.titA}>
      <a className={styles.select}>
        <em>
          <img
            src="https://static.upbit.com/logos/WAVES.png"
            alt="https://static.upbit.com/logos/WAVES.png"
          />
        </em>
        <strong>웨이브</strong>
        <p>WAVES/KRW</p>
      </a>
      <a className={styles.arrow}>Arrow</a>
      <div className={styles.infoTab}>
        <dl>
          <dt className={styles.text_replace}>시세, 정보 텝</dt>
          <dd className={styles.on}>
            <a>시세</a>
          </dd>
          <dd>
            <a>정보</a>
          </dd>
          <div className={styles.setting}>
            <a href="#">화면설정</a>
          </div>
        </dl>
      </div>
    </span>
  );
}

export default TitA;
