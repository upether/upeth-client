import { useQuery } from 'react-query';

// REST API Orderbook 데이터 가져오기
// 사용되는 곳:
// https://docs.upbit.com/reference/%ED%98%B8%EA%B0%80-%EC%A0%95%EB%B3%B4-%EC%A1%B0%ED%9A%8C
const useOrderbookQuery = (symbolID = 'KRW-BTC') => {
  const { data: orderbookData = [] } = useQuery(
    ['orderbookData', symbolID],
    () =>
      fetch(`https://api.upbit.com/v1/orderbook?markets=${symbolID}`).then(
        (res) => res.json()
      )
  );

  return { orderbookData };
};

export default useOrderbookQuery;
