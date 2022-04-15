import { useQuery } from 'react-query';

// MarketAll 데이터 가져오고 pairID에 따라 가공하기
// 사용하는 컴포넌트 CoinListContainer
function useMarketData(pairID) {
  const { data = [] } = useQuery('marketData', () =>
    fetch('https://api.upbit.com/v1/market/all').then((res) => res.json())
  );

  const marketData = data.filter((el) => {
    const { market } = el;
    const [id] = market.split('-');
    if (id === pairID) return el;
  });
  const onlyMarketData = marketData.map((el) => el.market);
  const symbolData = onlyMarketData.join(',');

  return {
    marketData,
    symbolData,
  };
}

export default useMarketData;
