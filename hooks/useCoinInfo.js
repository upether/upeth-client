function useCoinInfo(tickerData) {
  let {
    change,
    market,
    trade_price,
    change_rate,
    change_price,
    high_price,
    low_price,
    acc_trade_price_24h,
    acc_trade_volume_24h,
  } = tickerData;

  let pairID;
  let coinID;

  if (Object.keys(tickerData).length !== 0) {
    [pairID, coinID] = market.split('-');

    trade_price = setNumberFormat(trade_price);
    change_price = setNumberFormat(change_price);
    high_price = setNumberFormat(high_price);
    low_price = setNumberFormat(low_price);
    acc_trade_price_24h = setNumberFormat(Math.floor(acc_trade_price_24h));
    acc_trade_volume_24h = setNumberFormat(acc_trade_volume_24h.toFixed(3));

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
    change,
    trade_price,
    change_rate,
    change_price,
    high_price,
    low_price,
    acc_trade_price_24h,
    acc_trade_volume_24h,
  };
}

const setNumberFormat = (number) => {
  if (number >= 100) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  } else if (number >= 1) {
    return number.toFixed(2);
  } else {
    return number.toFixed(4);
  }
};

export default useCoinInfo;
