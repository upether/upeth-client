import React from 'react';
import { Block } from './styles/DataDisplay.styles';

import DataList from './DataList';

const DataDisplay = () => {
  return (
    <Block>
      <DataList pairID='KRW' />
      <DataList pairID='BTC' />
      <DataList pairID='USDT' />
    </Block>
  );
};

export default DataDisplay;
