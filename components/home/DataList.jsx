import React from 'react';
import { Block } from './styles/DataList.styles';

import DataItem from './DataItem';
import useMarketQuery from '../../hooks/query/useMarketQuery';
import useTickerAllQuery from '../../hooks/query/useTickerAllQuery';

import {
  selectTickerAllData,
  combineTickerAllData,
  sortTickerAllData,
} from '../../utils/setTickerAllData';

const DataList = ({ pairID }) => {
  const { marketData: rawMarketData } = useMarketQuery();
  const { marketData, symbolData } = selectTickerAllData(rawMarketData, pairID);
  const { tickerAllData: rawTickerAllData } = useTickerAllQuery(symbolData);
  const { combinedTickerAllData } = combineTickerAllData(
    rawTickerAllData,
    marketData
  );
  const { sortedTickerAllData } = sortTickerAllData(
    combinedTickerAllData,
    '거래대금',
    true
  );

  let tickerAllData = [];
  if (sortedTickerAllData && sortedTickerAllData.length >= 5) {
    tickerAllData = sortedTickerAllData.slice(0, 5);
  }

  return (
    <Block>
      <header>
        코인시세 <p>{pairID}</p>
      </header>
      <ul>
        {tickerAllData.map((el) => (
          <DataItem key={el.market} data={el} />
        ))}
      </ul>
    </Block>
  );
};

export default DataList;
