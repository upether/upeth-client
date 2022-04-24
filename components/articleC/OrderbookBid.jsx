import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import isEqual from 'react-fast-compare';
import {
  Block,
  Bar,
  Up,
  TypeFormA,
  TypeFormB,
  InnerBlock,
  OverFlow,
} from './styles/OrderbookBid.styles';

import useTradesQuery from '../../hooks/query/useTradesQuery';
import useTradeWebSocket from '../../hooks/websocket/useTradeWebSocket';

import { setOrderbookBidData } from '../../utils/setOrderbookData';
import {
  setTradesData,
  setTradesWebSocketData,
} from '../../utils/setTradesData';

// OrderbookBid의 Inner를 담당
const Inner = React.memo(() => {
  const [data, setData] = useState([]);
  const router = useRouter();
  // RestAPI Trades 데이터 가져오기
  const { tradesData: rawTradesData } = useTradesQuery(router.query.code);
  // WebSocket Trade 데이터 가져오기
  const { wsInstance } = useTradeWebSocket(router.query.code);

  useEffect(() => {
    if (rawTradesData) {
      const { tradesData } = setTradesData(rawTradesData);
      let temp = [...tradesData];
      temp.shift();
      setData(temp);
    }
  }, [rawTradesData]);

  useEffect(() => {
    if (wsInstance) {
      const { tradesWebSocketData } = setTradesWebSocketData(wsInstance);
      let temp = [...data];
      if (data.length === 30) temp.pop();
      setData([tradesWebSocketData, ...temp]);
    }
  }, [wsInstance]);

  return (
    <InnerBlock colSpan='2' rowSpan='15'>
      <dl>
        <dt>체결강도</dt>
        <dd>+100.00%</dd>
      </dl>
      <OverFlow>
        <table>
          <colgroup>
            <col width='50%' />
            <col width='*' />
          </colgroup>
          <thead>
            <tr>
              <th>체결가</th>
              <th>체결량</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((el, i) => {
              return (
                <tr key={i}>
                  <td>{el.tradePrice}</td>
                  <td className={el.ask_bid === 'ASK' ? 'down' : 'up'}>
                    {el.tradeVolume}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </OverFlow>
    </InnerBlock>
  );
});

// ArticleC에 Bid부분을 담당 (ArticleC/OrderbookContainer/OrderbookPrice/OrderbookBid)
const OrderbookBid = React.memo(({ idx, data, total, prev_closing_price }) => {
  // Orderbook Bid 데이터 가공하기
  const { changePrice, changeRate, sizeRate } = setOrderbookBidData(
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
      {idx === 0 && <Inner />}
      <Up>
        <a
          className={changePrice > 0 ? 'up' : changePrice < 0 ? 'down' : ''}
          href='#'
          onClick={(e) => clickOrderbook(e)}
        >
          <TypeFormA>
            <strong>{data.bidPrice}</strong>
          </TypeFormA>
          <TypeFormB>{changeRate + '%'}</TypeFormB>
        </a>
      </Up>
      <Bar onClick={(e) => clickOrderbookBar(e)}>
        <a href='#'>
          <div
            style={{
              width: `${sizeRate > 100 ? 100 + '%' : sizeRate + '%'}`,
            }}
          >
            -
          </div>
          <p>{data.bidSize}</p>
        </a>
      </Bar>
      <td></td>
    </Block>
  );
}, isEqual);

export default OrderbookBid;
