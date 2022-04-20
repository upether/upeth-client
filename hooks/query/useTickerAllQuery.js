import { useQuery } from 'react-query';

// REST API Ticker All 데이터 가져오기
// 사용되는 곳:
// https://docs.upbit.com/reference/ticker%ED%98%84%EC%9E%AC%EA%B0%80-%EB%82%B4%EC%97%AD
const useTickerAllQuery = (symbolID) => {
  const { data: tickerAllData } = useQuery(['tickerAllData', symbolID], () => {
    if (symbolID) {
      return fetch(`https://api.upbit.com/v1/ticker?markets=${symbolID}`).then(
        (res) => res.json()
      );
    } else {
      return [];
    }
  });

  return { tickerAllData };
};

export default useTickerAllQuery;
