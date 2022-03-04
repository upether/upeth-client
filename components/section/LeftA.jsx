import styles from '../../styles/LeftA.module.css';

function LeftA() {
  return (
    <div className={styles.leftA}>
      <article>
        <span className={styles.cell01}>
          <div className={styles.askPrice}>
            <ul>
              <li>
                <a className={styles.on} href="#">
                  일반호가
                </a>
              </li>
              <li>
                <a href="#">누적호가</a>
              </li>
              <li>
                <a href="#">호가주문</a>
              </li>
            </ul>
          </div>
        </span>
        <span>hi</span>
      </article>
    </div>
  );
}

export default LeftA;
