import styles from '../../styles/RightA.module.css';
import OrderA from '../order/OrderA';
import TabA from '../tab/TabA';

function RightA() {
  return (
    <div className={styles.rightA}>
      <article>
        <TabA />
        <OrderA />
      </article>
    </div>
  );
}

export default RightA;
