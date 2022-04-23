import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

// REST API Ticker 데이터 가져오기
// 사용되는 곳:
// https://docs.upbit.com/reference/ticker%ED%98%84%EC%9E%AC%EA%B0%80-%EB%82%B4%EC%97%AD
const useTickerQuery = (symbolID) => {
  const [tickerData, setTickerData] = useState({});

  const { data } = useQuery(['tickerData', symbolID], () => {
    if (symbolID) {
      return fetch(`https://api.upbit.com/v1/ticker?markets=${symbolID}`).then(
        (res) => res.json()
      );
    } else {
      return [];
    }
  });

  // data[0] 값이 있을때 해당하는 값 state로 관리하기
  useEffect(() => {
    if (data && data.length !== 0) {
      setTickerData(data[0]);
    }
  }, [data]);

  return { tickerData };
};

export default useTickerQuery;
