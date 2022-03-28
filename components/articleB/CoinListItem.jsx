import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react';
import {
  Block,
  Bookmark,
  Candle,
  Line,
  Box,
  Title,
  Price,
  Percent,
  Volume,
} from './styles/CoinListItem.styles';

import useExchange from '../../hooks/useExchange';

const CoinListItem = observer(({ coinData }) => {
  const exchangeStore = useExchange();
  const {
    market,
    change,
    opening_price,
    high_price,
    low_price,
    trade_price,
    change_rate,
    change_price,
    signed_change_price,
    acc_trade_price_24h,
    korean_name,
  } = coinData;
  const [a, b] = market.split('-');

  const router = useRouter();

  const clickTableRow = useCallback((e, marketID) => {
    e.preventDefault();
    exchangeStore.setSymbolID(marketID);
    router.push(`/exchange?code=${marketID}`);
  }, []);

  return (
    <Block change={change}>
      <colgroup>
        <col width="26" />
        <col width="26" />
        <col width="94" />
        <col width="98" />
        <col width="58" />
        <col width="*" />
      </colgroup>
      <tbody>
        {/* {change === 'RISE' ? <tr className="up"> : <tr className="down">} */}
        {/* <tr className="up"> */}
        <tr onClick={(e) => clickTableRow(e, market)}>
          <td>
            <Bookmark>
              <a href="#">즐겨찾기</a>
            </Bookmark>
          </td>
          <Candle>
            <a href="#">
              <div>
                <Line
                  opening_price={opening_price}
                  trade_price={trade_price}
                  high_price={high_price}
                  low_price={low_price}
                  signed_change_price={signed_change_price}
                >
                  -
                </Line>
                <Box
                  opening_price={opening_price}
                  trade_price={trade_price}
                  high_price={high_price}
                  low_price={low_price}
                  signed_change_price={signed_change_price}
                >
                  -
                </Box>
              </div>
            </a>
          </Candle>
          <Title>
            <a href="#">
              <strong>{korean_name}</strong>
            </a>
            <em>
              {b}
              <span>/{a}</span>
            </em>
          </Title>
          <Price>
            <strong>
              {trade_price > 100
                ? trade_price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                : trade_price >= 1
                ? trade_price.toFixed(2)
                : trade_price.toFixed(4)}
            </strong>
            <span></span>
          </Price>
          <Percent>
            {/* <p>+11.89%</p>
            <em>2,410</em> */}
            {change === 'RISE' ? (
              <p>{'+' + (change_rate * 100).toFixed(2) + '%'}</p>
            ) : change === 'FALL' ? (
              <p>{'-' + (change_rate * 100).toFixed(2) + '%'}</p>
            ) : (
              <p>{(change_rate * 100).toFixed(2) + '%'}</p>
            )}
            <em>
              {change_price > 100
                ? change_price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                : change_price >= 1
                ? change_price.toFixed(2)
                : change_price.toFixed(4)}
            </em>
          </Percent>
          <Volume>
            {/* <p>
              957,471<i>백만</i>
            </p> */}
            <p>
              {Math.floor(acc_trade_price_24h / 1000000)
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              <i>백만</i>
            </p>
          </Volume>
        </tr>
      </tbody>
    </Block>
  );
});

export default CoinListItem;
