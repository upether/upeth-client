import { useQuery } from 'react-query';

const useTrades = () => {
  const { data = [] } = useQuery('tradesData', () =>
    fetch(`https://api.upbit.com/v1/trades/ticks?market=KRW-BTC&count=20`).then(
      (res) => res.json()
    )
  );

  const tradesData = data?.map((el) => {
    const { trade_price, trade_volume } = el;
    return { trade_price, trade_volume };
  });

  return { tradesData };
};

export default useTrades;
