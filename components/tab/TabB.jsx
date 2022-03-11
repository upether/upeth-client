import React, { useState } from 'react';
import { Block } from './TabB.styles';

import Highlight from './Highlight';
import ScrollB from './ScrollB';

function TabB() {
  const [tapOption, setTapOption] = useState('원화');

  return (
    <Block>
      <ul>
        <li>
          <a
            className={tapOption === '원화' ? 'on' : ''}
            href="#"
            onClick={() => setTapOption('원화')}
          >
            원화
          </a>
        </li>
        <li>
          <a
            className={tapOption === 'BTC' ? 'on' : ''}
            href="#"
            onClick={() => setTapOption('BTC')}
          >
            BTC
          </a>
        </li>
        <li>
          <a
            className={tapOption === 'USDT' ? 'on' : ''}
            href="#"
            onClick={() => setTapOption('USDT')}
          >
            USDT
          </a>
        </li>
        <li>
          <a
            className={tapOption === '보유' ? 'on' : ''}
            href="#"
            onClick={() => setTapOption('보유')}
          >
            보유
          </a>
        </li>
        <li>
          <a
            className={tapOption === '관심' ? 'on' : ''}
            href="#"
            onClick={() => setTapOption('관심')}
          >
            관심
          </a>
        </li>
      </ul>
      <Highlight />
      <ScrollB />
    </Block>
  );
}

export default TabB;
