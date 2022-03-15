import React, { useState } from 'react';
import { observer } from 'mobx-react';
import {
  Block,
  Select,
  Arrow,
  InfoTab,
  TextReplace,
  Setting,
} from './Title.styles';

import useExchange from '../../hooks/useExchange';

const Title = observer(function Title() {
  const [tapOption, setTapOption] = useState('시세');

  const exchangeStore = useExchange();

  console.log('title', exchangeStore.symbol);

  return (
    <Block>
      <Select href="">
        <em>
          <img
            src="https://static.upbit.com/logos/WAVES.png"
            alt="https://static.upbit.com/logos/WAVES.png"
          />
        </em>
        <strong>웨이브</strong>
        <p>WAVES/KRW</p>
        <p>{exchangeStore.symbol}</p>
      </Select>
      <Arrow href="">Arrow</Arrow>
      <InfoTab>
        <dl>
          <TextReplace>시세, 정보 텝</TextReplace>
          <dd>
            <a
              className={tapOption === '시세' ? 'on' : ''}
              href="#"
              onClick={() => setTapOption('시세')}
            >
              시세
            </a>
          </dd>
          <dd>
            <a
              className={tapOption === '정보' ? 'on' : ''}
              href="#"
              onClick={() => setTapOption('정보')}
            >
              정보
            </a>
          </dd>
          <Setting>
            <a href="#">화면설정</a>
          </Setting>
        </dl>
      </InfoTab>
    </Block>
  );
});

export default Title;
