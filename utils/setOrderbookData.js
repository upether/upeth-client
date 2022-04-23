import {
  setPriceFormat,
  setVolumeFormat,
  setDateFormat,
} from './setDataFormat';

export const setOrderbookAskData = (data, prev_closing_price, total) => {
  let changePrice;
  let changeRate;
  let sizeRate;

  if (Object.keys(data).lenght !== 0 && prev_closing_price) {
    changePrice = data.ask_price - prev_closing_price;

    if (changePrice > 0) {
      changeRate = '+' + ((changePrice / prev_closing_price) * 100).toFixed(2);
    } else {
      changeRate = ((changePrice / prev_closing_price) * 100).toFixed(2);
    }

    sizeRate = (data.ask_size / total) * 100 * 5;
  }

  return { changePrice, changeRate, sizeRate };
};

export const setOrderbookBidData = (data, prev_closing_price, total) => {
  let changePrice;
  let changeRate;
  let sizeRate;

  if (Object.keys(data).lenght !== 0 && prev_closing_price) {
    changePrice = data.bid_price - prev_closing_price;

    if (changePrice > 0) {
      changeRate = '+' + ((changePrice / prev_closing_price) * 100).toFixed(2);
    } else {
      changeRate = ((changePrice / prev_closing_price) * 100).toFixed(2);
    }

    sizeRate = (data.bid_size / total) * 100 * 5;
  }

  return { changePrice, changeRate, sizeRate };
};

export const setOrderbookInnerData = (tickerData) => {
  const {
    market,
    high_price,
    low_price,
    trade_price,
    prev_closing_price,
    acc_trade_price_24h,
    acc_trade_volume_24h,
    highest_52_week_price,
    highest_52_week_date,
    lowest_52_week_price,
    lowest_52_week_date,
  } = tickerData;

  // Format만 변환
  let pairID;
  let coinID;
  let highPrice;
  let lowPrice;
  let prevClosingPrice;
  let accTradePrice24h;
  let accTradeVolume24h;
  let highest52WeekPrice;
  let highest52WeekDate;
  let lowest52WeekPrice;
  let lowest52WeekData;

  // Format만 변환(사용처가 다른 B유형)
  let accTradePrice24hB;
  let accTradeVolume24hB;

  // 데이터 조작을 통해 가공이 필요
  let highChangeRate;
  let lowChangeRate;

  // tickerData 값이 있는지 확인 후
  // tickerData 가공하기
  if (Object.keys(tickerData).length !== 0) {
    [pairID, coinID] = market.split('-');

    highPrice = setPriceFormat(high_price);
    lowPrice = setPriceFormat(low_price);
    prevClosingPrice = setPriceFormat(prev_closing_price);
    highest52WeekPrice = setPriceFormat(highest_52_week_price);
    lowest52WeekPrice = setPriceFormat(lowest_52_week_price);
    accTradePrice24h = setPriceFormat(Math.floor(acc_trade_price_24h));

    accTradeVolume24h = setVolumeFormat(trade_price, acc_trade_volume_24h);

    highest52WeekDate = setDateFormat(highest_52_week_date);
    lowest52WeekData = setDateFormat(lowest_52_week_date);

    accTradePrice24hB = setPriceFormat(
      Math.floor(acc_trade_price_24h / 1000000)
    );
    accTradeVolume24hB = setVolumeFormat(
      trade_price,
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
  }

  return {
    coinID,
    highPrice,
    lowPrice,
    prevClosingPrice,
    highest52WeekPrice,
    highest52WeekDate,
    lowest52WeekPrice,
    lowest52WeekData,
    accTradePrice24hB,
    accTradeVolume24hB,
    highChangeRate,
    lowChangeRate,
  };
};
