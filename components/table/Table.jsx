import styles from '../../styles/Table.module.css';

function Table() {
  return (
    <table className={styles.table}>
      <colgroup>
        <col width="26" />
        <col width="26" />
        <col width="94" />
        <col width="98" />
        <col width="58" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr className={styles.up}>
          <td>
            <span className={styles.bookmark}>
              <a href="#">즐겨찾기</a>
            </span>
          </td>
          <td className={styles.cAlign}>
            <a href="#">
              <div>
                <span className={styles.line}>-</span>
                <span className={styles.box}>-</span>
              </div>
            </a>
          </td>
          <td className={styles.tit}>
            <a href="#">
              <strong>웨이브</strong>
            </a>
            <em>
              WAVES
              <span>/KRW</span>
            </em>
          </td>
          <td className={styles.price}>
            <strong>22,450</strong>
            <span></span>
          </td>
          <td className={styles.percent}>
            <p>+11.89%</p>
            <em>2,410</em>
          </td>
          <td className={styles.rAlign}>
            <p>
              957,471<i>백만</i>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
