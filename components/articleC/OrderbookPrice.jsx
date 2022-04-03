import React from 'react';
import { observer } from 'mobx-react';
import { Block } from './styles/OrderbookPrice.styles';

import OrderbookBid from './OrderbookBid';
import OrderbookAsk from './OrderbookAsk';
import useExchange from '../../hooks/useExchange';
import useOrderbook from '../../hooks/useOrderbook';
import useWebsocket from '../../hooks/useWebSocket';
import useWebSocketOrderbook from '../../hooks/useWebSocketOrderbook';

const OrderbookPrice = observer(() => {
  // const exchangeStore = useExchange();
  // const {
  //   totalAskSize,
  //   totalBidSize,
  //   askData = [],
  //   bidData = [],
  // } = useOrderbook(exchangeStore.symbolID);

  const { wsInstance } = useWebsocket();
  const {
    totalAskSize,
    totalBidSize,
    askData = [],
    bidData = [],
  } = useWebSocketOrderbook(wsInstance);

  return (
    <Block>
      <colgroup>
        <col width="42" />
        <col width="120" />
        <col width="*" />
        <col width="120" />
        <col width="42" />
      </colgroup>
      <tbody>
        {askData?.map((el, i) => (
          <OrderbookAsk key={i} idx={i} data={el} total={totalAskSize} />
        ))}
        {bidData?.map((el, i) => (
          <OrderbookBid key={i} idx={i} data={el} total={totalBidSize} />
        ))}
      </tbody>
    </Block>
  );
});

export default OrderbookPrice;
