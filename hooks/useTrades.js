import { useQuery } from 'react-query';

// Rest API Trades 데이터 가져오기
// 사용되는 곳 OrderbookBid
// https://docs.upbit.com/reference/%EC%B5%9C%EA%B7%BC-%EC%B2%B4%EA%B2%B0-%EB%82%B4%EC%97%AD
const useTrades = (symbolID = 'KRW-BTC') => {
  const { data: rawTradesData = [] } = useQuery(['tradesData', symbolID], () =>
    fetch(
      `https://api.upbit.com/v1/trades/ticks?market=${symbolID}&count=30`
    ).then((res) => res.json())
  );

  return { rawTradesData };
};

export default useTrades;
