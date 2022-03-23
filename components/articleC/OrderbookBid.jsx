import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import {
  Block,
  Bar,
  Up,
  TypeFormA,
  TypeFormB,
  InnerBlock,
  OverFlow,
} from './OrderbookBid.styles';

import useExchange from '../../hooks/useExchange';
import useTrades from '../../hooks/useTrades';
import useTicker from '../../hooks/useTicker';
import useCoinInfo from '../../hooks/useCoinInfo';

const Inner = observer(() => {
  const exchangeStore = useExchange();
  const { tradesData = [] } = useTrades(exchangeStore.symbolID);

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
            {tradesData?.map((el, i) => {
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

const OrderbookBid = observer(({ idx, data, total }) => {
  const exchangeStore = useExchange();
  const { tickerData = [] } = useTicker(exchangeStore.symbolID);
  const { prevClosingPrice } = useCoinInfo(tickerData);

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
});

export default OrderbookBid;
