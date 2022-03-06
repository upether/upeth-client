import styles from '../../styles/TableRowB.module.css';

function TableRowB({ cnt }) {
  return (
    <tr className={styles.tableRowB}>
      {cnt === 'first' && (
        <td colSpan="2" rowSpan="15" className={styles.inner01}>
          <dl>
            <dt>체결강도</dt>
            <dd>+92.56%</dd>
          </dl>
          <div className={styles.overflow}>
            <table>
              <colgroup>
                <col width="50%" />
                <col width="*" />
              </colgroup>
              <thead>
                <tr>
                  <th>체결가</th>
                  <th>체결량</th>
                </tr>
              </thead>
              <tbody>
                {Array(30)
                  .fill()
                  .map((el) => {
                    return (
                      <tr>
                        <td>48,819,000</td>
                        <td className={styles.up}>0.041</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </td>
      )}
      <td className={styles.downB}>
        <a href="#">
          <div className={styles.ty03}>
            <strong>50,870,000</strong>
          </div>
          <div className={styles.ty02}>-1.87%</div>
        </a>
      </td>
      <td className={styles.bar}>
        <a href="#">
          <div style={{ width: '9.01613%' }}>-</div>
          <p>0.636</p>
        </a>
      </td>
      <td></td>
    </tr>
  );
}

export default TableRowB;
