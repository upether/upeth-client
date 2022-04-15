// MarketAll 데이터 가공하기
// 사용하는 곳 CoinListContainer
const useMarketAllData = (marketAllData, pairID) => {
  let marketData;
  let marketOnlyData;
  let symbolData;

  if (marketAllData.length !== 0) {
    marketData = marketAllData.filter((el) => {
      const { market } = el;
      const [id] = market.split('-');
      if (id === pairID) return el;
    });
    marketOnlyData = marketData.map((el) => el.market);
    symbolData = marketOnlyData.join(',');
  }
  console.log('useMarketAllData', marketOnlyData);

  return { marketData, symbolData };
};

export default useMarketAllData;
