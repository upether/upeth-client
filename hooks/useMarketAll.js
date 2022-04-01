import { useQuery } from 'react-query';

const useMarketAll = () => {
  const { data: marketAllData } = useQuery('marketAllData', () =>
    fetch('https://api.upbit.com/v1/market/all').then((res) => res.json())
  );

  return {
    marketAllData,
  };
};

export default useMarketAll;
