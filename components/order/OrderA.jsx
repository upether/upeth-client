import React from 'react';
import styles from '../../styles/OrderA.module.css';

function OrderA() {
  return (
    <div className={styles.orderA}>
      <div>
        <dl>
          <dt className={styles.checkOption}>
            <strong>주문구분</strong>
          </dt>
          <dd className={styles.checkOption}>
            <span>
              <a className={styles.on}>
                <em>-</em>
                지정가
              </a>
              <a className={styles.disable}>
                <em>-</em>
                시장가
              </a>
              <a className={styles.disable}>
                <em>-</em>
                예약-지정가
              </a>
            </span>
          </dd>

          <dt className={styles.price}>
            <strong>주문가능</strong>
          </dt>
          <dd className={styles.price}>
            <strong>0</strong>
            <i>KRW</i>
          </dd>

          <dt className={styles.marginA}>
            <strong>매수가격</strong>
            <i>(KRW)</i>
          </dt>
          <dd className={styles.marginA}>
            <div>
              <input type="text" value="48,228,000" />
              <a className={styles.minus}>-</a>
              <a className={styles.plus}>+</a>
            </div>
          </dd>

          <dt className={styles.marginB}>
            <strong>주문수량</strong>
            <i>(BTC)</i>
          </dt>
          <dd className={styles.marginB}>
            <input type="text" placeholder="0" />
          </dd>
          <dd className={styles.quantity}>
            <a>10%</a>
            <a>25%</a>
            <a>50%</a>
            <a>100%</a>
            <a className={styles.qtInput}>직접입력</a>
          </dd>

          <dt className={styles.marginC}>
            <strong>주문총액</strong>
            <i>(KRW)</i>
          </dt>
          <dd className={styles.marginC}>
            <input type="text" placeholder="0" />
          </dd>
        </dl>
        <div className={styles.fixedBottom}>
          <span>
            <p>수수료: 0.05%</p>
            <p>최소주문금액: 1,000 KRW</p>
          </span>
          <ul>
            <li className={styles.ty01}>
              <a>회원가입</a>
            </li>
            <li className={styles.ty02}>
              <a>로그인</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderA;
