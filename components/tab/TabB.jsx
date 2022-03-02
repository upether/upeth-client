import styles from '../../styles/TabB.module.css';
import ScrollB from '../scroll/ScrollB';

function TabB() {
  return (
    <div className={styles.tabB}>
      <ul>
        <li>
          <a className={styles.on} href="#">
            원화
          </a>
        </li>
        <li>
          <a href="#">BTC</a>
        </li>
        <li>
          <a href="#">USDT</a>
        </li>
        <li>
          <a href="#">보유</a>
        </li>
        <li>
          <a href="#">관심</a>
        </li>
      </ul>
      <table className={styles.highlight}>
        <colgroup>
          <col width="26" />
          <col width="26" />
          <col width="94" />
          <col width="88" />
          <col width="78" />
          <col width="*" />
        </colgroup>
        <thead>
          <tr>
            <th colSpan="3">
              <a href="#">
                한글명
                <img src="https://cdn.upbit.com/images/ico_change.c6ad0e9.png" />
              </a>
            </th>
            <th>
              <a href="#">
                현재가
                <img src="https://cdn.upbit.com/images/ico_up_down.d050377.png" />
              </a>
            </th>
            <th>
              <a href="#">
                전일대비
                <img src="https://cdn.upbit.com/images/ico_up_down.d050377.png" />
              </a>
            </th>
            <th>
              <a href="#">
                거래대금
                <img src="https://cdn.upbit.com/images/ico_up_down_2.71770c7.png" />
              </a>
            </th>
          </tr>
        </thead>
      </table>
      <ScrollB />
    </div>
  );
}

export default TabB;
