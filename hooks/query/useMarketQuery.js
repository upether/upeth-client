import { useQuery } from 'react-query';

// REST API Market 데이터 가져오기
// 사용되는 곳:
// https://docs.upbit.com/reference/%EB%A7%88%EC%BC%93-%EC%BD%94%EB%93%9C-%EC%A1%B0%ED%9A%8C
const useMarketQuery = () => {
  const { data: marketData = [] } = useQuery('marketData', () =>
    fetch('https://api.upbit.com/v1/market/all').then((res) => res.json())
  );

  return { marketData };
};

export default useMarketQuery;
