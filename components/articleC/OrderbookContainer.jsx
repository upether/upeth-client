import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block } from './styles/OrderbookContainer.styles';

import OrderbookPrice from './OrderbookPrice';
// import OrderbookTotal from './OrderbookTotal';

// ArticleC에 container부분을 담당 (ArticleC/OrderbookContainer)
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
