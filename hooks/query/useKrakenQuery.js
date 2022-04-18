import { useQuery } from 'react-query';

// REST API Kraken Ticker 데이터 가져오기
// 사용되는 곳:
//
const useKrakenQuery = (symbolID) => {
  const { status: krakenStatus, data: krakenTickerData = {} } = useQuery(
    ['krakenTickerData', symbolID],
    () =>
      fetch(`https://api.kraken.com/0/public/Ticker?pair=${symbolID}`).then(
        (res) => res.json()
      )
  );

  return { krakenStatus, krakenTickerData };
};

export default useKrakenQuery;
