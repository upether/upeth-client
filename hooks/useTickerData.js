// trade wsInstance 가공하기
// 사용되는 곳 CoinMarket
const useTickerData = (tickerData) => {
  const {
    market,
    high_price,
    low_price,
    trade_price,
    prev_closing_price,
    change,
    change_price,
    change_rate,
    acc_trade_price_24h,
    acc_trade_volume_24h,
    highest_52_week_price,
    highest_52_week_date,
    lowest_52_week_price,
    lowest_52_week_date,
  } = tickerData;

  let pairID;
  let coinID;
  let highPrice;
  let lowPrice;
  let accTradePrice24h;
  let accTradeVolume24h;

  // tickerData 값이 있는지 확인 후
  // tickerData 가공하기
  if (Object.keys(tickerData).length !== 0) {
    [pairID, coinID] = market.split('-');

    highPrice = setPriceFormat(high_price);
    lowPrice = setPriceFormat(low_price);
    accTradePrice24h = setPriceFormat(Math.floor(acc_trade_price_24h));
    accTradeVolume24h = setVolumeFormat(trade_price, acc_trade_volume_24h);
  }

  return {
    pairID,
    coinID,
    highPrice,
    lowPrice,
    accTradePrice24h,
    accTradeVolume24h,
  };
};

// price Format 정해주기
const setPriceFormat = (price) => {
  if (price >= 100) {
    return price.toLocaleString('ko-KR');
  } else if (price >= 1) {
    return price.toFixed(2);
  } else {
    return price.toFixed(4);
  }
};

// volume Format 정해주기
const setVolumeFormat = (price, volume, decimal = true) => {
  if (price >= 1 && decimal) {
    return volume
      .toFixed(3)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return Math.floor(volume)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }
};

export default useTickerData;
