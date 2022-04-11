import { useQuery } from 'react-query';

// 업비트의 모든 마켓 데이터 가져오기
// 사용되는 곳 CoinHeader
// https://docs.upbit.com/reference/%EB%A7%88%EC%BC%93-%EC%BD%94%EB%93%9C-%EC%A1%B0%ED%9A%8C
const useMarketAll = () => {
  // REST API(market/all)를 통해 모든 마켓 데이터 가져오기
  const { data: marketAllData = [] } = useQuery('marketAllData', () =>
    fetch('https://api.upbit.com/v1/market/all').then((res) => res.json())
  );

  return {
    marketAllData,
  };
};

export default useMarketAll;
