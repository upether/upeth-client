import React from 'react';
import { Block } from './TabA.styles';

function TabA() {
  return (
    <Block>
      <ul>
        <li>
          <a href="#" className="on">
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
    </Block>
  );
}

export default TabA;
