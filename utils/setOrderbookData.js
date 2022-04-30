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

  // 데이터 조작을 통해 가공이 필요
  let highChangeRate;
  let lowChangeRate;

  // tickerData 값이 있는지 확인 후
  // tickerData 가공하기
  if (Object.keys(tickerData).length !== 0) {
    [, coinID] = market.split('-');

    highPrice = setPriceFormat(high_price);
    lowPrice = setPriceFormat(low_price);
    prevClosingPrice = setPriceFormat(prev_closing_price);
    accTradePrice24h = setPriceFormat(
      Math.floor(acc_trade_price_24h / 1000000)
    );
    accTradeVolume24h = setVolumeFormat(
      trade_price,
      Math.ceil(acc_trade_volume_24h),
      false
    );
    highest52WeekPrice = setPriceFormat(highest_52_week_price);
    highest52WeekDate = setDateFormat(highest_52_week_date);
    lowest52WeekPrice = setPriceFormat(lowest_52_week_price);
    lowest52WeekData = setDateFormat(lowest_52_week_date);

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
    accTradePrice24h,
    accTradeVolume24h,
    highest52WeekPrice,
    highest52WeekDate,
    lowest52WeekPrice,
    lowest52WeekData,
    highChangeRate,
    lowChangeRate,
  };
};

export const setOrderbookWebSocketData = (wsInstance) => {
  let totalAskSize;
  let totalBidSize;
  let askData;
  let bidData;

  if (wsInstance && wsInstance.type === 'orderbook') {
    const { total_ask_size, total_bid_size, orderbook_units } = wsInstance;

    totalAskSize = total_ask_size;
    totalBidSize = total_bid_size;

    askData = orderbook_units.reverse().map((el) => {
      const { ask_price, ask_size } = el;
      const askPrice = setPriceFormat(ask_price);
      const askSize = setVolumeFormat(ask_price, ask_size, true);
      return { askPrice, askSize, ask_price, ask_size };
    });

    bidData = orderbook_units.reverse().map((el) => {
      const { bid_price, bid_size } = el;
      const bidPrice = setPriceFormat(bid_price);
      const bidSize = setVolumeFormat(bid_price, bid_size, true);
      return { bidPrice, bidSize, bid_price, bid_size };
    });
  }

  return { totalAskSize, totalBidSize, askData, bidData };
};
