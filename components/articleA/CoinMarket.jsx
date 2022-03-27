import React from 'react';
import { observer } from 'mobx-react';
import {
  Block,
  TypeFormA,
  TypeFormB,
  TypeFormC,
} from './styles/CoinMarket.styles';

import useExchange from '../../hooks/useExchange';
import useTicker from '../../hooks/useTicker';
import useCoinInfo from '../../hooks/useCoinInfo';

const CoinMarket = observer(() => {
  const exchangeStore = useExchange();
  const { tickerData = {} } = useTicker(exchangeStore.symbolID);
  const {
    pairID,
    coinID,
    change,
    trade_price,
    change_rate,
    change_price,
    high_price,
    low_price,
    acc_trade_price_24h,
    acc_trade_volume_24h,
  } = useCoinInfo(tickerData);

  return (
    <Block>
      <TypeFormA change={change}>
        <span>
          <strong>{trade_price}</strong>
          <em>{pairID}</em>
        </span>
        <span>
          <p>전일대비</p>
          <strong>{change_rate}</strong>
          <strong change={change}>{change_price}</strong>
        </span>
      </TypeFormA>
      {/* mini chart position */}
      <TypeFormB>mini chart</TypeFormB>
      <TypeFormC>
        <dl>
          <dt>고가</dt>
          <dd>
            <strong className="up">{high_price}</strong>
          </dd>
          <dt>저가</dt>
          <dd>
            <strong className="down">{low_price}</strong>
          </dd>
        </dl>
        <dl>
          <dt>거래량(24H)</dt>
          <dd>
            <strong>{acc_trade_volume_24h}</strong>
            &nbsp;
            <i>{coinID}</i>
          </dd>
          <dt>거래대금(24H)</dt>
          <dd>
            <strong>{acc_trade_price_24h}</strong>
            &nbsp;
            <i>{pairID}</i>
          </dd>
        </dl>
      </TypeFormC>
    </Block>
  );
});

export default CoinMarket;
