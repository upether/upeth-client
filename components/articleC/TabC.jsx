import React, { useState } from 'react';
import ScrollC from './ScrollC';
import { Block } from './TabC.styles';

const TabC = () => {
  const [tapOption, setTapOption] = useState('일반호가');

  return (
    <Block>
      <ul>
        <li>
          <a
            className={tapOption === '일반호가' ? 'on' : ''}
            href="#"
            onClick={() => setTapOption('일반호가')}
          >
            일반호가
          </a>
        </li>
        <li>
          <a
            className={tapOption === '누적호가' ? 'on' : ''}
            href="#"
            onClick={() => setTapOption('누적호가')}
          >
            누적호가
          </a>
        </li>
        <li>
          <a
            className={tapOption === '호가주문' ? 'on' : ''}
            href="#"
            onClick={() => setTapOption('호가주문')}
          >
            호가주문
          </a>
        </li>
      </ul>
      <ScrollC />
    </Block>
  );
};

export default TabC;
