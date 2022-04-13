import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import isEqual from 'react-fast-compare';
import {
  Block,
  Bar,
  Down,
  TypeFormA,
  TypeFormB,
  InnerBlock,
} from './styles/OrderbookAsk.styles';

import useTicker from '../../hooks/useTicker';
import useTickerData from '../../hooks/useTickerData';
import useOrderbookAskData from '../../hooks/useOrderbookAskData';

// Inner를 담당
const Inner = React.memo(() => {
  const router = useRouter();
  // RestAPI Ticker 데이터 가져오기
  const { tickerData = {} } = useTicker(router.query.code);
  // RestAPI Ticker 데이터 가공하기
  const {
    coinID,
    highPrice,
    lowPrice,
    prevClosingPrice,
    accTradePrice24hB,
    accTradeVolume24hB,
    highest52WeekPrice,
    highest52WeekDate,
    lowest52WeekPrice,
    lowest52WeekData,
    highChangeRate,
    lowChangeRate,
  } = useTickerData(tickerData);

  return (
    <InnerBlock colSpan='2' rowSpan='15'>
      <dl>
        <dt>거래량</dt>
        <dd>
          {accTradeVolume24hB}
          <i>{coinID}</i>
        </dd>
        <dt>거래대금</dt>
        <dd>
          {accTradePrice24hB}
          <i>
            <img
              src='https://cdn.upbit.com/images/ico_million.9f2273e.png'
              alt='백만원'
            />
          </i>
          <em>(최근24시간)</em>
        </dd>
      </dl>
      <dl>
        <dt>52주 최고</dt>
        <dd className='up'>
          {highest52WeekPrice}
          <em>({highest52WeekDate})</em>
        </dd>
        <dt>52주 최저</dt>
        <dd className='down'>
          {lowest52WeekPrice}
          <em>({lowest52WeekData})</em>
        </dd>
      </dl>
      <dl>
        <dt>전일종가</dt>
        <dd>{prevClosingPrice}</dd>
        <dt>당일고가</dt>
        <dd className={highChangeRate > 0 ? 'up' : ''}>
          {highPrice}
          <em className={highChangeRate > 0 ? 'up' : ''}>
            {highChangeRate > 0
              ? '+' + highChangeRate + '%'
              : highChangeRate + '%'}
          </em>
        </dd>
        <dt>당일저가</dt>
        <dd className={lowChangeRate < 0 ? 'down' : ''}>
          {lowPrice}
          <em className={lowChangeRate < 0 ? 'down' : ''}>
            {lowChangeRate + '%'}
          </em>
        </dd>
      </dl>
    </InnerBlock>
  );
});

// ArticleC에 Ask부분을 담당 (ArticleC/OrderbookContainer/OrderbookPrice/OrderbookAsk)
const OrderbookAsk = React.memo(({ idx, data, total }) => {
  const router = useRouter();
  // RestAPI Ticker 데이터 가져오기
  const { tickerData = {} } = useTicker(router.query.code);
  // RestAPI Ticker 데이터 가공하기
  const { prev_closing_price } = useTickerData(tickerData);
  // Orderbook AskData 가공하기
  const { changePrice, changeRate, sizeRate } = useOrderbookAskData(
    data,
    prev_closing_price,
    total
  );

  const clickOrderbook = useCallback((e) => {
    e.preventDefault();
  }, []);

  const clickOrderbookBar = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Block>
      <td></td>
      <Bar onClick={(e) => clickOrderbookBar(e)}>
        <a href='#'>
          <div
            style={{
              width: `${sizeRate > 100 ? 100 + '%' : sizeRate + '%'}`,
            }}
          >
            -
          </div>
          <p>{data.askSize}</p>
        </a>
      </Bar>
      <Down>
        <a
          className={changePrice > 0 ? 'up' : changePrice < 0 ? 'down' : ''}
          href='#'
          onClick={(e) => clickOrderbook(e)}
        >
          <TypeFormA>
            <strong>{data.askPrice}</strong>
          </TypeFormA>
          <TypeFormB>{changeRate + '%'}</TypeFormB>
        </a>
      </Down>
      {idx === 0 && <Inner />}
    </Block>
  );
}, isEqual);

export default OrderbookAsk;
