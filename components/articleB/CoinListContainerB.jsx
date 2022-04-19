import React, { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block } from './styles/CoinListContainer.styles';

import CoinListItem from './CoinListItem';
import CoinListEmptyText from './CoinListEmptyText';
import useExchange from '../../hooks/useExchange';
import useMarketAll from './hooks/useMarketAll';
import useTickerAll from './hooks/useTickerAll';
import useTickerBookmark from '../../hooks/useTickerBookmark';

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

  const setBookmark = useCallback((market) => {
    const bookmark = localStorage.getItem('bookmark');
    if (bookmark) {
      const parseBookmark = JSON.parse(bookmark);
      if (!parseBookmark.includes(market)) {
        localStorage.setItem(
          'bookmark',
          JSON.stringify([...parseBookmark, market])
        );
      } else {
        localStorage.setItem(
          'bookmark',
          JSON.stringify(parseBookmark.filter((el) => el !== market))
        );
      }
    } else {
      localStorage.setItem('bookmark', JSON.stringify([market]));
    }
  }, []);

  let bookmarkData;

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('bookmark') === null) {
      localStorage.setItem('bookmark', '[]');
    } else {
      const { marketAllData } = useMarketAll();
      const { totalCoinData: bookmark } = useTickerBookmark(
        marketAllData,
        JSON.parse(localStorage.getItem('bookmark')).join(),
        exchangeStore.headerOption,
        exchangeStore.searchInput
      );
      bookmarkData = bookmark;
    }
  }

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
          bookmarkData?.map((el, i) => (
            <CoinListItem key={i} coinData={el} setBookmark={setBookmark} />
          ))
        )}
      </Scrollbars>
    </Block>
  );
});

export default CoinListContainerB;
