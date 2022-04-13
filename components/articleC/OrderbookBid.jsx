import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react';
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

import useExchange from '../../hooks/useExchange';
import useTicker from '../../hooks/useTicker';
import useTickerData from '../../hooks/useTickerData';
import useOrderbookBidData from '../../hooks/useOrderbookBidData';
import useTrades from '../../hooks/useTrades';
// import useCoinInfo from '../../hooks/useCoinInfo';

import useWebSocketTrade from '../../hooks/useWebSocketTrade';

// 이 부분
const Inner = observer(() => {
  const [data, setData] = useState([]);
  const [symbol, setSymbol] = useState('');
  const exchangeStore = useExchange();
  const { tradesData = [] } = useTrades(exchangeStore.symbolID);
  const { wsInstance } = useWebSocketTrade(exchangeStore.symbolID);

  useEffect(() => {
    setSymbol(exchangeStore.symbolID);
  }, [exchangeStore.symbolID]);

  useEffect(() => {
    if (data.length < 30 || symbol !== exchangeStore.symbolID) {
      setData([...tradesData]);
    }
  }, [tradesData]);

  useEffect(() => {
    if (wsInstance) {
      let temp = [...data];
      temp.pop();
      const { ask_bid, trade_price, trade_volume } = wsInstance;
      setData([{ ask_bid, trade_price, trade_volume }, ...temp]);
    }
  }, [wsInstance]);

  // ask_bid
  // trade_price
  // trade_volume
  // tradePrice
  // tradeVolume

  // ------
  // console.log(exchangeStore);

  // console.log(tradesData);
  // console.log(wsInstance);
  // console.log('data', data);
  // []
  // null

  // array(30)
  // null

  // array(30)
  // wsInstance
  // ------

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
                  {/* <td>{el.tradePrice}</td>
                  <td className={el.ask_bid === 'ASK' ? 'down' : 'up'}>
                    {el.tradeVolume}
                  </td> */}
                  <td>{el.trade_price}</td>
                  <td className={el.ask_bid === 'ASK' ? 'down' : 'up'}>
                    {el.trade_volume}
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
const OrderbookBid = React.memo(({ idx, data, total }) => {
  const router = useRouter();
  // RestAPI Ticker 데이터 가져오기
  const { tickerData = {} } = useTicker(router.query.code);
  // RestAPI Ticker 데이터 가공하기
  const { prev_closing_price } = useTickerData(tickerData);
  // Orderbook BidData 가공하기
  const { changePrice, changeRate, sizeRate } = useOrderbookBidData(
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
