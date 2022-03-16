import { useQuery } from 'react-query';

function useMarket(marketID) {
  const { data } = useQuery('marketData', () =>
    fetch('https://api.upbit.com/v1/market/all').then((res) => res.json())
  );

  const marketData = data?.filter((el) => {
    const { market } = el;
    const [id] = market.split('-');
    if (id === marketID) return el;
  });
  const symbolData = marketData?.map((el) => el.market);
  const totalSymobolData = symbolData?.join(',');

  return {
    marketData,
    totalSymobolData,
  };
}

export default useMarket;
