import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block } from './styles/ScrollB.styles';

import TableB from './TableB';
import useExchange from '../../hooks/useExchange';
import useMarket from '../../hooks/useMarket';
import useTickerTotal from '../../hooks/useTickerTotal';

const ScrollB = () => {
  const exchangeStore = useExchange();

  const { marketData, totalSymobolData } = useMarket(exchangeStore.marketID);
  const { totalCoinData } = useTickerTotal(marketData, totalSymobolData);

  // totalCoinData
  // market: KRW-BTC
  // change: 'RISE', 'FALL', 'EVEN'
  // korean_name: 비트코인, english_name: Bitcoin
  // 현재가 - trade_price
  // 전일대비 퍼센트 - change_rate
  // 전일대비 가격차 - change_price
  // 거래대금 - acc_trade_price_24h
  // 캔들 - high_price, low_price

  return (
    <Block>
      <Scrollbars style={{ width: '100%', height: '770px' }} universal={true}>
        {totalCoinData?.map((el, i) => (
          <TableB key={i} coinData={el} />
        ))}
      </Scrollbars>
    </Block>
  );
};

export default ScrollB;
