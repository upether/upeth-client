import { useQuery } from 'react-query';

// 사용하는 컴포넌트 CoinListContainer
const useTickerTotalData = (marketData, symbolData) => {
  const { data = [] } = useQuery(['tickerTotalData', symbolData], () =>
    fetch(`https://api.upbit.com/v1/ticker?markets=${symbolData}`).then((res) =>
      res.json()
    )
  );

  const tickerTotalData = data.map((el, i) => {
    const {
      market,
      change,
      opening_price,
      trade_price,
      change_rate,
      change_price,
      signed_change_price,
      signed_change_rate,
      acc_trade_price_24h,
      high_price,
      low_price,
    } = el;
    const { korean_name, english_name } = marketData[i];
    return {
      market,
      change,
      opening_price,
      high_price,
      low_price,
      trade_price,
      change_rate,
      change_price,
      signed_change_rate,
      signed_change_price,
      acc_trade_price_24h,
      korean_name,
      english_name,
    };
  });

  return <div></div>;
};

export default useTickerTotalData;
