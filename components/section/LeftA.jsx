import styles from '../../styles/LeftA.module.css';
import TableA from '../table/TableA';

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
        <span className={styles.askPriceB}>
          <div className={styles.scrollB}>
            <TableA />
          </div>
        </span>
      </article>
    </div>
  );
}

export default LeftA;
