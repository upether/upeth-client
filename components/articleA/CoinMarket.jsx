import React from 'react';
import { useRouter } from 'next/router';
import {
  Block,
  TypeFormA,
  TypeFormB,
  TypeFormCBlock,
} from './styles/CoinMarket.styles';

import useTicker from '../../hooks/useTicker';
import useTickerData from '../../hooks/useTickerData';
import useWebSocketTicker from '../../hooks/useWebSocketTicker';
import useWebSocketTickerData from '../../hooks/useWebSocketTickerData';

import dynamic from 'next/dynamic';
const LightweightChart = dynamic(() => import('../lightweightChart'), {
  ssr: false,
});

const TypeFormC = React.memo(({ tickerData }) => {
  // tickerData 가공하기
  const {
    pairID,
    coinID,
    highPrice,
    lowPrice,
    accTradePrice24h,
    accTradeVolume24h,
  } = useTickerData(tickerData);

  return (
    <TypeFormCBlock>
      <dl>
        <dt>고가</dt>
        <dd>
          <strong className="up">{highPrice}</strong>
        </dd>
        <dt>저가</dt>
        <dd>
          <strong className="down">{lowPrice}</strong>
        </dd>
      </dl>
      <dl>
        <dt>거래량(24H)</dt>
        <dd>
          <strong>{accTradeVolume24h}</strong>
          &nbsp;
          <i>{coinID}</i>
        </dd>
        <dt>거래대금(24H)</dt>
        <dd>
          <strong>{accTradePrice24h}</strong>
          &nbsp;
          <i>{pairID}</i>
        </dd>
      </dl>
    </TypeFormCBlock>
  );
});

// ArticleA 해당 코인의 마켓정보를 담당 (ArticleA/CoinContainer/CoinMarket)
const CoinMarket = () => {
  const router = useRouter();
  // 업비트의 해당하는 코인의 Ticker 데이터 가져오기
  const { tickerData = {} } = useTicker(router.query.code);
  // tickerData 가공하기
  const { pairID } = useTickerData(tickerData);
  // WebSocket Ticker 데이터 가져오기
  const { wsInstance } = useWebSocketTicker(router.query.code);
  // WebSocket TickerData 가공하기
  const { change, tradePrice, changePrice, signedChangeRate } =
    useWebSocketTickerData(wsInstance);

  return (
    <Block>
      <TypeFormA change={change}>
        <span>
          <strong>{tradePrice}</strong>
          <em>{pairID}</em>
        </span>
        <span>
          <p>전일대비</p>
          <strong>{signedChangeRate + '%'}</strong>
          <strong change={change}>{changePrice}</strong>
        </span>
      </TypeFormA>
      {/* mini chart position */}
      <TypeFormB>
        <LightweightChart />
      </TypeFormB>
      <TypeFormC tickerData={tickerData} />
    </Block>
  );
};

export default CoinMarket;
