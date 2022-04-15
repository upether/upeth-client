import React, { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block } from './styles/CoinListContainer.styles';

import useExchange from '../../hooks/useExchange';
import useMarketAll from '../../hooks/useMarketAll';
import useMarketAllData from '../../hooks/useMarketAllData';
import useTickerTotalB from '../../hooks/useTickerTotalB';

import useMarketData from '../../hooks/useMarketData';
import useTickerTotalData from '../../hooks/useTickerTotalData';

const CoinListContainerB = () => {
  const exchangeStore = useExchange();

  // MarketAll 데이터 가져오고 pairID에 따라 가공하기
  // marketData: pairID에 따라 MarketAll 데이터 가공한 결과
  // symbolData: pairID에 따라 market만 가져와 , 붙인 결과 ex) BTC-KRW,ETH-KRW
  const { marketData, symbolData } = useMarketData(exchangeStore.pairID);
  console.log(marketData, symbolData);

  // TickerTotal 데이터 가져오고 가공하기(정렬, 검색)
  const {} = useTickerTotalData(marketData, symbolData);

  return <div></div>;
};

export default CoinListContainerB;
