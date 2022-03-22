import React from 'react';
import { observer } from 'mobx-react';
import { Block } from './OrderbookPrice.styles';

import TableRowDownC from './TableRowDownC';
import OrderbookUp from './OrderbookUp';
import useExchange from '../../hooks/useExchange';
import useOrderbook from '../../hooks/useOrderbook';

const OrderbookPrice = observer(() => {
  const exchangeStore = useExchange();
  const { askData = [], bidData = [] } = useOrderbook(exchangeStore.symbolID);

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
        {askData.map((el, i) => (
          <TableRowDownC key={i} idx={i} data={el} />
        ))}
        {bidData.map((el, i) => (
          <OrderbookUp key={i} idx={i} data={el} />
        ))}
      </tbody>
    </Block>
  );
});

export default OrderbookPrice;
