import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

// RestAPI Ticker 데이터 가져오기
// 사용되는 곳 CoinMarket
// https://docs.upbit.com/reference/ticker%ED%98%84%EC%9E%AC%EA%B0%80-%EB%82%B4%EC%97%AD
const useTicker = (symbolID = 'KRW-BTC') => {
  const [tickerData, setTickerData] = useState({});
  // REST API(ticker?markets=KRW-BTC)를 통해 해당 코인의 Ticker 데이터 가져오기
  const { data = [] } = useQuery(['tickerData', symbolID], () =>
    fetch(`https://api.upbit.com/v1/ticker?markets=${symbolID}`).then((res) =>
      res.json()
    )
  );

  // data[0] 값이 있을때 해당하는 값 tickerData로 관리하기
  useEffect(() => {
    if (data[0]) {
      setTickerData(data[0]);
    }
  }, [data]);

  return {
    tickerData,
  };
};

export default useTicker;
