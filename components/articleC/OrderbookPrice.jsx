import React from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react';
import { Block } from './styles/OrderbookPrice.styles';

import OrderbookBid from './OrderbookBid';
import OrderbookAsk from './OrderbookAsk';
import useTickerQuery from '../../hooks/query/useTickerQuery';
import useOrderbookWebSocket from '../../hooks/websocket/useOrderbookWebSocket';

import { setOrderbookWebSocketData } from '../../utils/setOrderbookData';

// ArticleC에 Price부분을 담당 (ArticleC/OrderbookContainer/OrderbookPrice)
const OrderbookPrice = observer(() => {
  const router = useRouter();
  // RestAPI Ticker 데이터 가져오기
  const {
    tickerData: { prev_closing_price },
  } = useTickerQuery(router.query.code);
  // WebSocket Orderbook 데이터 가져오기
  const { wsInstance } = useOrderbookWebSocket(router.query.code);
  // WebSocket Orderbook 데이터 가공하기
  const {
    totalAskSize,
    totalBidSize,
    askData = [],
    bidData = [],
  } = setOrderbookWebSocketData(wsInstance);

  return (
    <Block>
      <colgroup>
        <col width='42' />
        <col width='120' />
        <col width='*' />
        <col width='120' />
        <col width='42' />
      </colgroup>
      <tbody>
        {askData?.map((el, i) => (
          <OrderbookAsk
            key={i}
            idx={i}
            data={el}
            total={totalAskSize}
            prev_closing_price={prev_closing_price}
          />
        ))}
        {bidData?.map((el, i) => (
          <OrderbookBid
            key={i}
            idx={i}
            data={el}
            total={totalBidSize}
            prev_closing_price={prev_closing_price}
          />
        ))}
      </tbody>
    </Block>
  );
});

export default OrderbookPrice;
