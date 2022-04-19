import React, { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react';

import useExchange from '../../hooks/useExchange';
import useMarketAll from './hooks/useMarketAll';
import useTickerAll from './hooks/useTickerAll';

const CoinListContainerB = observer(() => {
  const exchangeStore = useExchange();
  // 비동기 작성?
  const { marketData, symbolData } = useMarketAll(exchangeStore.pairID);
  const { tickerAllData } = useTickerAll(
    marketData,
    symbolData,
    exchangeStore.subOptionB,
    exchangeStore.subOptionBoolB,
    exchangeStore.searchInput
  );
  console.log(tickerAllData);

  return <div></div>;
});

export default CoinListContainerB;
