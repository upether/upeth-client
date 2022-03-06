import styles from '../../styles/TableA.module.css';
import TableRowA from './TableRowA';
import TableRowB from './TableRowB';

function TableA() {
  return (
    <table className={styles.tableA}>
      <colgroup>
        <col width="42" />
        <col width="120" />
        <col width="*" />
        <col width="120" />
        <col width="42" />
      </colgroup>
      <tbody>
        <TableRowA cnt="first" />
        {Array(14)
          .fill()
          .map((el, i) => (
            <TableRowA key={i} />
          ))}
        <TableRowB cnt="first" />
        {Array(14)
          .fill()
          .map((el, i) => (
            <TableRowB key={i} />
          ))}
      </tbody>
    </table>
  );
}

export default TableA;
