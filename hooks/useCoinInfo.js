const useCoinInfo = (tickerData) => {
  let {
    market,
    high_price,
    low_price,
    trade_price,
    prev_closing_price,
    change,
    change_price,
    change_rate,
    // signed_change_price,
    // signed_change_rate,
    acc_trade_price_24h,
    acc_trade_volume_24h,
    highest_52_week_price,
    highest_52_week_date,
    lowest_52_week_price,
    lowest_52_week_date,
  } = tickerData;

  let pairID;
  let coinID;
  let accTradePrice24h;
  let accTradeVolume24h;
  let highChangeRate;
  let lowChangeRate;
  let prevClosingPrice;

  if (Object.keys(tickerData).length !== 0) {
    [pairID, coinID] = market.split('-');

    const tradePrice = trade_price;

    prevClosingPrice = prev_closing_price;
    accTradePrice24h = setPriceFormat(
      Math.floor(acc_trade_price_24h / 1000000)
    );
    accTradeVolume24h = setVolumeFormat(
      tradePrice,
      Math.ceil(acc_trade_volume_24h),
      false
    );
    highChangeRate = (
      ((high_price - prev_closing_price) / prev_closing_price) *
      100
    ).toFixed(2);
    lowChangeRate = (
      ((low_price - prev_closing_price) / prev_closing_price) *
      100
    ).toFixed(2);

    high_price = setPriceFormat(high_price);
    low_price = setPriceFormat(low_price);
    trade_price = setPriceFormat(trade_price);
    prev_closing_price = setPriceFormat(prev_closing_price);
    change_price = setPriceFormat(change_price);
    acc_trade_price_24h = setPriceFormat(Math.floor(acc_trade_price_24h));
    highest_52_week_price = setPriceFormat(highest_52_week_price);
    lowest_52_week_price = setPriceFormat(lowest_52_week_price);

    acc_trade_volume_24h = setVolumeFormat(tradePrice, acc_trade_volume_24h);

    highest_52_week_date = setDateFormat(highest_52_week_date);
    lowest_52_week_date = setDateFormat(lowest_52_week_date);

    if (change === 'RISE') {
      change_rate = '+' + (change_rate * 100).toFixed(2) + '%';
    } else if (change === 'FALL') {
      change_rate = '-' + (change_rate * 100).toFixed(2) + '%';
    } else {
      change_rate = (change_rate * 100).toFixed(2) + '%';
    }
  }

  return {
    pairID,
    coinID,
    prevClosingPrice,
    accTradePrice24h,
    accTradeVolume24h,
    highChangeRate,
    lowChangeRate,
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
  };
};

const setPriceFormat = (price) => {
  if (price >= 100) {
    return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  } else if (price >= 1) {
    return price.toFixed(2);
  } else {
    return price.toFixed(4);
  }
};

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

const setDateFormat = (date) => {
  return date.replace(/-/g, '.');
};

export default useCoinInfo;
