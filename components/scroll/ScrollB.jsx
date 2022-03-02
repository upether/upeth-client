import styles from '../../styles/ScrollB.module.css';
import Table from '../table/Table';

function ScrollB() {
  return (
    <div className={styles.scrollB}>
      {Array(20)
        .fill()
        .map((el, i) => (
          <Table key={i} />
        ))}
    </div>
  );
}

export default ScrollB;
