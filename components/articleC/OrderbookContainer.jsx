import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block } from './OrderbookContainer.styles';
import OrderbookPrice from './OrderbookPrice';

import TableC from './TableC';

const OrderbookContainer = () => {
  return (
    <Block>
      <Scrollbars style={{ width: '100%', height: '694px' }} universal={true}>
        {/* <TableC /> */}
        <OrderbookPrice />
      </Scrollbars>
    </Block>
  );
};

export default OrderbookContainer;
