import { useQuery } from 'react-query';

// REST API Dunamu 데이터 가져오기
// 사용되는 곳:
//
const useDunamuQuery = () => {
  const { status: dunamuStatus, data: dunamuData = [] } = useQuery(
    'dunamuData',
    () =>
      fetch(
        'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
      ).then((res) => res.json())
  );

  return { dunamuStatus, dunamuData };
};

export default useDunamuQuery;
