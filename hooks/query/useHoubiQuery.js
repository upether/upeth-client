import { useQuery } from 'react-query';

// REST API Houbi Ticker 데이터 가져오기
// 사용되는 곳:
//
const useHoubiQuery = (symbolID) => {
  const { status: huobiStatus, data: huobiTickerData = {} } = useQuery(
    ['huobiTickerData', symbolID],
    () =>
      fetch(
        `https://api.huobi.pro/market/detail/merged?symbol=${symbolID.toLowerCase()}`
      ).then((res) => res.json())
  );

  return { huobiStatus, huobiTickerData };
};

export default useHoubiQuery;
