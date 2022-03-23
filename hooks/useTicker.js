import { useQuery } from 'react-query';

const useTicker = (symbolID) => {
  const { data = [] } = useQuery(['tickerData', symbolID], () =>
    fetch(`https://api.upbit.com/v1/ticker?markets=${symbolID}`).then((res) =>
      res.json()
    )
  );

  let tickerData;

  if (data[0]) tickerData = data[0];

  return {
    tickerData,
  };
};

export default useTicker;
