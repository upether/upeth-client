import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block } from './styles/OrderbookContainer.styles';

import OrderbookPrice from './OrderbookPrice';
// import OrderbookTotal from './OrderbookTotal';

const OrderbookContainer = () => {
  return (
    <Block>
      <Scrollbars style={{ width: '100%', height: '694px' }} universal={true}>
        <OrderbookPrice />
      </Scrollbars>
      {/* <OrderbookTotal /> */}
    </Block>
  );
};

export default OrderbookContainer;
