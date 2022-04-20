import { useState, useEffect } from 'react';

import useTickerAllQuery from '../../../hooks/query/useTickerAllQuery';

const useTickerAll = (
  marketData,
  symbolData,
  subOptionB,
  subOptionBoolB,
  searchInput = ''
) => {
  const [combinedData, setCombinedData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [tickerAllData, setTickerAllData] = useState([]);

  const { tickerAllData: rawTickerAllData = [] } =
    useTickerAllQuery(symbolData);

  // combine
  useEffect(() => {
    if (rawTickerAllData.length !== 0 && marketData.length !== 0) {
      const tempTickerAllData = rawTickerAllData?.map((el, i) => {
        const {
          market,
          change,
          opening_price,
          trade_price,
          change_rate,
          change_price,
          signed_change_price,
          signed_change_rate,
          acc_trade_price_24h,
          high_price,
          low_price,
        } = el;
        const filteredData = marketData.filter((el) => el.market === market)[0];
        const { korean_name, english_name } = filteredData;
        return {
          market,
          change,
          opening_price,
          trade_price,
          change_rate,
          change_price,
          signed_change_rate,
          signed_change_price,
          acc_trade_price_24h,
          high_price,
          low_price,
          korean_name,
          english_name,
        };
      });
      setCombinedData(tempTickerAllData);
    } else {
      setTickerAllData([]);
    }
  }, [rawTickerAllData, marketData]);

  // sort
  useEffect(() => {
    if (combinedData.length !== 0) {
      if (subOptionB === '현재가') {
        if (subOptionBoolB === true) {
          setSortedData(
            [...combinedData].sort((a, b) => b.trade_price - a.trade_price)
          );
        } else {
          setSortedData(
            [...combinedData].sort((a, b) => a.trade_price - b.trade_price)
          );
        }
      } else if (subOptionB === '전일대비') {
        if (subOptionBoolB === true) {
          setSortedData(
            [...combinedData].sort(
              (a, b) => b.signed_change_rate - a.signed_change_rate
            )
          );
        } else {
          setSortedData(
            [...combinedData].sort(
              (a, b) => a.signed_change_rate - b.signed_change_rate
            )
          );
        }
      } else if (subOptionB === '거래대금') {
        if (subOptionBoolB === true) {
          setSortedData(
            [...combinedData].sort(
              (a, b) => b.acc_trade_price_24h - a.acc_trade_price_24h
            )
          );
        } else {
          setSortedData(
            [...combinedData].sort(
              (a, b) => a.acc_trade_price_24h - b.acc_trade_price_24h
            )
          );
        }
      }
    }
  }, [combinedData, subOptionB, subOptionBoolB]);

  // filter
  useEffect(() => {
    if (sortedData.length !== 0) {
      setTickerAllData(
        [...sortedData].filter((el) => {
          const [_, id] = el.market.split('-');

          return (
            el.korean_name.includes(searchInput) ||
            el.english_name.toLowerCase().includes(searchInput.toLowerCase()) ||
            id.toLowerCase().includes(searchInput.toLowerCase())
          );
        })
      );
    }
  }, [sortedData, searchInput]);

  return { tickerAllData };
};

export default useTickerAll;
