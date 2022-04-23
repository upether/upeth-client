import React from 'react';

import CoinListItem from './CoinListItem';
import useExchange from '../../hooks/useExchange';
import useMarketQuery from '../../hooks/query/useMarketQuery';
import useTickerAllQuery from '../../hooks/query/useTickerAllQuery';

import {
  combineTickerAllData,
  sortTickerAllData,
  filterTickerAllData,
} from '../../utils/setTickerAllData';

// ArticleB BookrmarkList를 담당 (ArticleB/CoinListTab/CoinListContainer/CoinListBookrmarkList)
const CoinListBookrmarkList = ({ setBookmark }) => {
  const exchangeStore = useExchange();

  let tickerAllData;

  if (typeof window !== 'undefined') {
    // marketData, symbolData 정하기
    const { marketData: rawMarketData } = useMarketQuery();
    const symbolData = JSON.parse(localStorage.getItem('bookmark')).join();

    // tickerAllData 정하기
    const { tickerAllData: rawTickerAllData } = useTickerAllQuery(symbolData);
    const { combinedTickerAllData } = combineTickerAllData(
      rawTickerAllData,
      rawMarketData
    );
    const { sortedTickerAllData } = sortTickerAllData(
      combinedTickerAllData,
      exchangeStore.subOptionB,
      exchangeStore.subOptionBoolB
    );
    const { filteredTickerAllData } = filterTickerAllData(
      sortedTickerAllData,
      exchangeStore.searchInput
    );

    tickerAllData = filteredTickerAllData;
  }

  return (
    <>
      {tickerAllData?.map((el, i) => (
        <CoinListItem key={i} coinData={el} setBookmark={setBookmark} />
      ))}
    </>
  );
};

export default CoinListBookrmarkList;
