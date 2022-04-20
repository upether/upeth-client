import React, { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block } from './styles/CoinListContainer.styles';

import CoinListItem from './CoinListItem';
import CoinListEmptyText from './CoinListEmptyText';
import useExchange from '../../hooks/useExchange';
import useMarketAll from './hooks/useMarketAll';
import useTickerAllData from './hooks/useTickerAllData';

import useBookmark from './hooks/useBookmark';

import useMarketQuery from '../../hooks/query/useMarketQuery';

import useBookmarkAllData from './hooks/useBookmarkAllData';

const CoinListContainerB = observer(() => {
  const exchangeStore = useExchange();
  const { marketData, symbolData } = useMarketAll(exchangeStore.pairID);
  const { tickerAllData } = useTickerAllData(
    marketData,
    symbolData,
    exchangeStore.subOptionB,
    exchangeStore.subOptionBoolB,
    exchangeStore.searchInput
  );
  const { marketData: bookmarkMarketData } = useMarketQuery();
  const { setBookmark, bookmarkSymbolData } = useBookmark(exchangeStore.pairID);
  const { tickerAllData: bookmarkAllData } = useBookmarkAllData(
    bookmarkMarketData,
    bookmarkSymbolData,
    exchangeStore.subOptionB,
    exchangeStore.subOptionBoolB,
    exchangeStore.searchInput
  );

  return (
    <Block>
      <Scrollbars style={{ width: '100%', height: '770px' }} universal={true}>
        {exchangeStore.optionB !== '보유' &&
        exchangeStore.optionB !== '관심' ? (
          tickerAllData?.map((el, i) => (
            <CoinListItem key={i} coinData={el} setBookmark={setBookmark} />
          ))
        ) : exchangeStore.optionB === '보유' ? (
          <CoinListEmptyText />
        ) : (
          bookmarkAllData?.map((el, i) => (
            <CoinListItem key={i} coinData={el} setBookmark={setBookmark} />
          ))
        )}
      </Scrollbars>
    </Block>
  );
});

export default CoinListContainerB;
