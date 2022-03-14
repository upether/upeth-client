import React from 'react';
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
} from './TableB.styles';

function TableB({ coinData }) {
  const {
    market,
    change,
    trade_price,
    change_rate,
    change_price,
    acc_trade_price_24h,
    high_price,
    low_price,
    korean_name,
  } = coinData;
  let [a, b] = market.split('-');

  console.log('TableB');

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
        <tr>
          <td>
            <Bookmark>
              <a href="#">즐겨찾기</a>
            </Bookmark>
          </td>
          <Candle>
            <a href="#">
              <div>
                <Line>-</Line>
                <Box>-</Box>
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
}

export default TableB;
