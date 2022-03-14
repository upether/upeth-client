import React from 'react';
import { useQuery } from 'react-query';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block } from './ScrollB.styles';

import TableB from '../table/TableB';

function ScrollB() {
  const { isLoading, error, data } = useQuery('marketData', () =>
    fetch('https://api.upbit.com/v1/market/all').then((res) => res.json())
  );

  let marketData;
  let symbolData;
  let totalData;
  let totalCoinData;

  marketData = data?.filter((el) => {
    let [a, b] = el.market.split('-');
    if (a === 'KRW') return el;
  });

  symbolData = marketData?.map((el) => el.market);
  totalData = symbolData?.join(',');

  const { data: tickerTotalData } = useQuery(
    ['tickerTotalData', totalData],
    () =>
      fetch(`https://api.upbit.com/v1/ticker?markets=${totalData}`).then(
        (res) => res.json()
      )
  );

  console.log(tickerTotalData);

  totalCoinData = tickerTotalData?.map((el, i) => {
    const {
      market,
      change,
      trade_price,
      change_rate,
      change_price,
      acc_trade_price_24h,
      high_price,
      low_price,
    } = el;
    const { korean_name } = marketData[i];
    return {
      market,
      change,
      trade_price,
      change_rate,
      change_price,
      acc_trade_price_24h,
      high_price,
      low_price,
      korean_name,
    };
  });

  console.log(totalCoinData);

  // 정렬
  // totalCoinData.sort((a, b) => b.acc_trade_price_24h - a.acc_trade_price_24h);

  // market: KRW-BTC
  // change: 'RISE', 'FALL', 'EVEN'
  // 현재가 - trade_price
  // 전일대비 퍼센트 - change_rate
  // 전일대비 가격차 - change_price
  // 거래대금 - acc_trade_price_24h

  // 캔들 - high_price, low_price

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Block>
      <Scrollbars style={{ width: '100%', height: '770px' }}>
        {/* {Array(20)
        .fill()
        .map((el, i) => (
          <TableB key={i} />
        ))} */}
        {/* {marketData?.map((el, i) => (
          <TableB key={i} name={el.korean_name} market={el.market} />
        ))} */}
        {totalCoinData?.map((el, i) => (
          <TableB key={i} coinData={el} />
        ))}
      </Scrollbars>
    </Block>
  );
}

export default ScrollB;
