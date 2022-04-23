import React from 'react';

import CoinListItem from './CoinListItem';
import useMarketQuery from '../../hooks/query/useMarketQuery';
import useTickerAllQuery from '../../hooks/query/useTickerAllQuery';

import {
  combineTickerAllData,
  sortTickerAllData,
  filterTickerAllData,
} from '../../utils/setTickerAllData';

// ArticleB BookrmarkList를 담당 (ArticleB/CoinListTab/CoinListContainer/CoinListBookrmarkList)
const CoinListBookrmarkList = ({
  setBookmark,
  subOptionB,
  subOptionBoolB,
  searchInput,
}) => {
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
      subOptionB,
      subOptionBoolB
    );
    const { filteredTickerAllData } = filterTickerAllData(
      sortedTickerAllData,
      searchInput
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
