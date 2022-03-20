import React, { useState } from 'react';
import { useQuery } from 'react-query';
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

function Title() {
  const exchangeStore = useExchange();
  const { data } = useQuery('data', () =>
    fetch('https://api.upbit.com/v1/market/all').then((res) => res.json())
  );
  const [tapOption, setTapOption] = useState('시세');
  const [pairID, coinID] = exchangeStore.symbolID.split('-');
  let market;

  if (data) {
    market = data.filter((el) => el.market === exchangeStore.symbolID)[0];
  }

  // change: 'RISE', 'FALL', 'EVEN'
  // 심볼 market: "KRW-BTC"
  // 현재가 - trade_price
  // 전일대비 퍼센트 - change_rate
  // 전일대비 가격차 - change_price
  // 고가 - high_price
  // 저가 - low_price
  // 거래량(24H) - acc_trade_price_24h
  // 거래대금(24H) - acc_trade_volume_24h

  return (
    <Block>
      <Select href="">
        <em>
          <img
            src={`https://static.upbit.com/logos/${coinID.toUpperCase()}.png`}
            alt={`https://static.upbit.com/logos/${coinID.toUpperCase()}.png`}
          />
        </em>
        <strong>{market?.korean_name}</strong>
        <p>
          {coinID}/{pairID}
        </p>
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
}

export default observer(Title);
