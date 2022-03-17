import { useQuery } from 'react-query';

function useTicker(symbolID) {
  const { status, data } = useQuery(['tickerData', symbolID], () =>
    fetch(`https://api.upbit.com/v1/ticker?markets=${symbolID}`).then((res) =>
      res.json()
    )
  );

  let tickerData;

  if (status === 'success') tickerData = data[0];

  return {
    tickerData,
  };
}

export default useTicker;
