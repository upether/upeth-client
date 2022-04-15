import { useQuery } from 'react-query';

const useTickerTotalB = (symbolData) => {
  const { tickerTotalData = [] } = useQuery(
    ['tickerTotalData', symbolData],
    () =>
      fetch(`https://api.upbit.com/v1/ticker?markets=${symbolData}`).then(
        (res) => res.json()
      )
  );

  return { tickerTotalData };
};

export default useTickerTotalB;
