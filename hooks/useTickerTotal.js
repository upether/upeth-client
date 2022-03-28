import { useQuery } from 'react-query';

function useTickerTotal(marketData, totalSymobolData, headerOption) {
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
        trade_price,
        change_rate,
        change_price,
        signed_change_rate,
        signed_change_price,
        acc_trade_price_24h,
        high_price,
        low_price,
        korean_name,
        english_name,
      };
    });
  }

  // sort
  if (headerOption[0] === 1) {
    if (!!totalData && headerOption[1] === true) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => b.trade_price - a.trade_price);
    }

    if (!!totalData && headerOption[1] === false) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => a.trade_price - b.trade_price);
    }
  } else if (headerOption[0] === 2) {
    if (!!totalData && headerOption[1] === true) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => b.signed_change_rate - a.signed_change_rate);
    }

    if (!!totalData && headerOption[1] === false) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => a.signed_change_rate - b.signed_change_rate);
    }
  } else {
    if (!!totalData && headerOption[1] === true) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => b.acc_trade_price_24h - a.acc_trade_price_24h);
    }

    if (!!totalData && headerOption[1] === false) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => a.acc_trade_price_24h - b.acc_trade_price_24h);
    }
  }

  return {
    totalCoinData,
  };
}

export default useTickerTotal;
