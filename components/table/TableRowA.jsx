import styles from '../../styles/TableRowA.module.css';

function TableRowA({ cnt }) {
  return (
    <tr className={styles.tableRowA}>
      <td></td>
      <td className={styles.bar}>
        <a href="#">
          <div style={{ width: '9.01613%' }}>-</div>
          <p>0.636</p>
        </a>
      </td>
      <td className={styles.downB}>
        <a href="#">
          <div className={styles.ty03}>
            <strong>50,870,000</strong>
          </div>
          <div className={styles.ty02}>-1.87%</div>
        </a>
      </td>
      {cnt === 'first' && (
        <td colSpan="2" rowSpan="15" className={styles.inner01}>
          <dl>
            <dt>거래량</dt>
            <dd>
              6,294<i>BTC</i>
            </dd>
            <dt>거래대금</dt>
            <dd>
              325,801<i>백만원</i>
              <em>(최근24시간)</em>
            </dd>
          </dl>
          <dl>
            <dt>52주 최고</dt>
            <dd className={styles.up}>
              82,700,000
              <em>(2021.11.09)</em>
            </dd>
            <dt>52주 최저</dt>
            <dd className={styles.down}>
              33,900,000
              <em>(2021.06.22)</em>
            </dd>
          </dl>
          <dl>
            <dt>전일종가</dt>
            <dd>51,842,000</dd>
            <dt>당일고가</dt>
            <dd className={styles.up}>
              51,952,000
              <em className={styles.up}>+0.21%</em>
            </dd>
            <dt>당일저가</dt>
            <dd className={styles.down}>
              50,476,000
              <em className={styles.down}>-2.63%</em>
            </dd>
          </dl>
        </td>
      )}
    </tr>
  );
}

export default TableRowA;
