import React from 'react';
import styles from '../../styles/TabA.module.css';

function TabA() {
  return (
    <span className={styles.tabA}>
      <ul>
        <li>
          <a href="#" className={styles.on}>
            매수
          </a>
        </li>
        <li>
          <a href="#">매도</a>
        </li>
        <li>
          <a href="#">간편주문</a>
        </li>
        <li>
          <a href="#">거래내역</a>
        </li>
      </ul>
    </span>
  );
}

export default TabA;
