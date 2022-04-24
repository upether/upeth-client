import { setPriceFormat, setVolumeFormat } from '../utils/setDataFormat';

export const setTickerData = (tickerData) => {
  const {
    market,
    high_price,
    low_price,
    trade_price,
    prev_closing_price,
    acc_trade_price_24h,
    acc_trade_volume_24h,
  } = tickerData;

  // Format만 변환
  let pairID;
  let coinID;
  let highPrice;
  let lowPrice;
  let prevClosingPrice;
  let accTradePrice24h;
  let accTradeVolume24h;

  // tickerData 값이 있는지 확인 후
  // tickerData 가공하기
  if (Object.keys(tickerData).length !== 0) {
    [pairID, coinID] = market.split('-');

    highPrice = setPriceFormat(high_price);
    lowPrice = setPriceFormat(low_price);
    prevClosingPrice = setPriceFormat(prev_closing_price);
    accTradePrice24h = setPriceFormat(Math.floor(acc_trade_price_24h));
    accTradeVolume24h = setVolumeFormat(trade_price, acc_trade_volume_24h);
  }

  return {
    pairID,
    coinID,
    highPrice,
    lowPrice,
    prevClosingPrice,
    accTradePrice24h,
    accTradeVolume24h,
  };
};

export const setTickerWebSocketData = (wsInstance) => {
  let change;
  let tradePrice;
  let changePrice;
  let signedChangeRate;

  // WebSocketTradeData 값이 있는지 확인후
  // WebSocketTradeData 가공하기
  if (wsInstance) {
    change = wsInstance.change;
    tradePrice = setPriceFormat(wsInstance.trade_price);
    changePrice = setPriceFormat(wsInstance.change_price);
    signedChangeRate = (wsInstance.signed_change_rate * 100).toFixed(2);
  }

  return {
    change,
    tradePrice,
    changePrice,
    signedChangeRate,
  };
};
