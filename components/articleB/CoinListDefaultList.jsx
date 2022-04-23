import React from 'react';

import useMarketQuery from '../../hooks/query/useMarketQuery';
import useTickerAllQuery from '../../hooks/query/useTickerAllQuery';
import CoinListItem from './CoinListItem';

import {
  selectTickerAllData,
  combineTickerAllData,
  sortTickerAllData,
  filterTickerAllData,
} from '../../utils/setTickerAllData';

// ArticleB DefaultList를 담당 (ArticleB/CoinListTab/CoinListContainer/CoinListDefaultList)
const CoinListDefaultList = ({
  setBookmark,
  pairID,
  subOptionB,
  subOptionBoolB,
  searchInput,
}) => {
  // marketData, symbolData 정하기
  const { marketData: rawMarketData } = useMarketQuery();
  const { marketData, symbolData } = selectTickerAllData(rawMarketData, pairID);

  // tickerAllData 정하기
  const { tickerAllData: rawTickerAllData } = useTickerAllQuery(symbolData);
  const { combinedTickerAllData } = combineTickerAllData(
    rawTickerAllData,
    marketData
  );
  const { sortedTickerAllData } = sortTickerAllData(
    combinedTickerAllData,
    subOptionB,
    subOptionBoolB
  );
  const { filteredTickerAllData: tickerAllData } = filterTickerAllData(
    sortedTickerAllData,
    searchInput
  );

  return (
    <>
      {tickerAllData?.map((el, i) => (
        <CoinListItem key={i} coinData={el} setBookmark={setBookmark} />
      ))}
    </>
  );
};

export default CoinListDefaultList;
