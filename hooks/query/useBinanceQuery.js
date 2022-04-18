import { useQuery } from 'react-query';

// REST API Binance Ticker 데이터 가져오기
// 사용되는 곳:
//
const useBinanceQuery = (symbolID) => {
  const { status: binanceStatus, data: binanceTickerData = {} } = useQuery(
    ['binanceTickerData', symbolID],
    () =>
      fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbolID}`
      ).then((res) => res.json())
  );

  return { binanceStatus, binanceTickerData };
};

export default useBinanceQuery;
