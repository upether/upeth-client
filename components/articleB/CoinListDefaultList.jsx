import React from 'react';

import CoinListItem from './CoinListItem';
import useExchange from '../../hooks/useExchange';
import useMarketQuery from '../../hooks/query/useMarketQuery';
import useTickerAllQuery from '../../hooks/query/useTickerAllQuery';

import {
  selectTickerAllData,
  combineTickerAllData,
  sortTickerAllData,
  filterTickerAllData,
} from '../../utils/setTickerAllData';

// ArticleB DefaultList를 담당 (ArticleB/CoinListTab/CoinListContainer/CoinListDefaultList)
const CoinListDefaultList = ({ setBookmark }) => {
  const exchangeStore = useExchange();

  // marketData, symbolData 정하기
  const { marketData: rawMarketData } = useMarketQuery();
  const { marketData, symbolData } = selectTickerAllData(
    rawMarketData,
    exchangeStore.pairID
  );

  // tickerAllData 정하기
  const { tickerAllData: rawTickerAllData } = useTickerAllQuery(symbolData);
  const { combinedTickerAllData } = combineTickerAllData(
    rawTickerAllData,
    marketData
  );
  const { sortedTickerAllData } = sortTickerAllData(
    combinedTickerAllData,
    exchangeStore.subOptionB,
    exchangeStore.subOptionBoolB
  );
  const { filteredTickerAllData: tickerAllData } = filterTickerAllData(
    sortedTickerAllData,
    exchangeStore.searchInput
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
