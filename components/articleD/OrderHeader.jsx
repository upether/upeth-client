import React, { useState } from 'react';
import { Block } from './styles/OrderHeader.styles';

const OrderHeader = () => {
  const [tapOption, setTapOption] = useState('매수');

  return (
    <Block>
      <ul>
        <li>
          <a
            className={tapOption === '매수' ? 'buy__on' : ''}
            href="#"
            onClick={() => setTapOption('매수')}
          >
            매수
          </a>
        </li>
        <li>
          <a
            className={tapOption === '매도' ? 'sell__on' : ''}
            href="#"
            onClick={() => setTapOption('매도')}
          >
            매도
          </a>
        </li>
        <li>
          <a
            className={tapOption === '간편주문' ? 'on' : ''}
            href="#"
            onClick={() => setTapOption('간편주문')}
          >
            간편주문
          </a>
        </li>
        <li>
          <a
            className={tapOption === '거래내역' ? 'on' : ''}
            href="#"
            onClick={() => setTapOption('거래내역')}
          >
            거래내역
          </a>
        </li>
      </ul>
    </Block>
  );
};

export default OrderHeader;
