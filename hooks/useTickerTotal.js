import { useQuery } from 'react-query';

function useTickerTotal(marketData, totalSymobolData) {
  const { status, data } = useQuery(['tickerTotalData', totalSymobolData], () =>
    fetch(`https://api.upbit.com/v1/ticker?markets=${totalSymobolData}`).then(
      (res) => res.json()
    )
  );

  let totalData;
  let totalCoinData;

  if (status === 'success' && !Object.keys(data).includes('error')) {
    totalData = data?.map((el, i) => {
      const {
        market,
        change,
        trade_price,
        change_rate,
        change_price,
        acc_trade_price_24h,
        high_price,
        low_price,
      } = el;
      const { korean_name, english_name } = marketData[i];
      return {
        market,
        change,
        trade_price,
        change_rate,
        change_price,
        acc_trade_price_24h,
        high_price,
        low_price,
        korean_name,
        english_name,
      };
    });
  }

  // sort
  if (!!totalData) {
    totalCoinData = []
      .concat(totalData)
      .sort((a, b) => b.acc_trade_price_24h - a.acc_trade_price_24h);
  }

  return {
    totalCoinData,
  };
}

export default useTickerTotal;
