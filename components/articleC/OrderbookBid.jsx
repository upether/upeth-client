import React, { useState, useCallback, useEffect } from 'react';
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
import useTrades from '../../hooks/useTrades';
// import useTicker from '../../hooks/useTicker';
// import useCoinInfo from '../../hooks/useCoinInfo';

import useWebsocketTrade from '../../hooks/useWebsocketTrade';

const Inner = observer(() => {
  const [data, setData] = useState([]);
  const [symbol, setSymbol] = useState('');
  const exchangeStore = useExchange();
  const { tradesData = [] } = useTrades(exchangeStore.symbolID);
  const { wsInstance } = useWebsocketTrade(exchangeStore.symbolID);

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
    <InnerBlock colSpan="2" rowSpan="15">
      <dl>
        <dt>체결강도</dt>
        <dd>+100.00%</dd>
      </dl>
      <OverFlow>
        <table>
          <colgroup>
            <col width="50%" />
            <col width="*" />
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
const OrderbookBid = React.memo(({ idx, data, total }) => {
  // const exchangeStore = useExchange();
  // const { tickerData = [] } = useTicker(exchangeStore.symbolID);
  // const { prevClosingPrice } = useCoinInfo(tickerData);

  const prevClosingPrice = 56369000;

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
          className={
            data.bid_price - prevClosingPrice > 0
              ? 'up'
              : data.bid_price - prevClosingPrice < 0
              ? 'down'
              : ''
          }
          href="#"
          onClick={(e) => clickOrderbook(e)}
        >
          <TypeFormA>
            <strong>{data.bidPrice}</strong>
          </TypeFormA>
          <TypeFormB>
            {data.bid_price - prevClosingPrice > 0
              ? '+' +
                (
                  ((data.bid_price - prevClosingPrice) / prevClosingPrice) *
                  100
                ).toFixed(2) +
                '%'
              : (
                  ((data.bid_price - prevClosingPrice) / prevClosingPrice) *
                  100
                ).toFixed(2) + '%'}
          </TypeFormB>
        </a>
      </Up>
      <Bar onClick={(e) => clickOrderbookBar(e)}>
        <a href="#">
          <div
            style={{
              width: `${
                (data.bid_size / total) * 100 * 5 > 100
                  ? 100 + '%'
                  : (data.bid_size / total) * 100 * 5 + '%'
              }`,
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
