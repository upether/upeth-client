import { setPriceFormat, setVolumeFormat } from './setDataFormat';

export const setTradesData = (rawTradesData) => {
  const tradesData = rawTradesData?.map((el) => {
    const { ask_bid, trade_price, trade_volume } = el;
    const tradePrice = setPriceFormat(trade_price);
    const tradeVolume = setVolumeFormat(trade_price, trade_volume, true);
    return { ask_bid, trade_price, trade_volume, tradePrice, tradeVolume };
  });

  return { tradesData };
};

export const setTradesWebSocketData = (wsInstance) => {
  let tradesWebSocketData;

  if (wsInstance) {
    const { ask_bid, trade_price, trade_volume } = wsInstance;
    const tradePrice = setPriceFormat(trade_price);
    const tradeVolume = setVolumeFormat(trade_price, trade_volume, true);

    tradesWebSocketData = {
      ask_bid,
      trade_price,
      trade_volume,
      tradePrice,
      tradeVolume,
    };
  }

  return { tradesWebSocketData };
};
