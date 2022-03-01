import styles from '../../styles/SearchB.module.css';

function SearchB() {
  return (
    <span className={styles.searchB}>
      <div className={styles.search}>
        <input type="text" placeholder="코인명/심볼검색" />
        <a href="#">검색</a>
      </div>
      <div className={styles.setting}>
        <a href="#">화면설정</a>
      </div>
    </span>
  );
}

export default SearchB;
