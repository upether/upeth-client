// WebSocket Trade 데이터 가공하기
// 사용하는 곳 OrderbookBid
const useWebSocketTradeData = (wsInstance) => {
  let webSocketTradeData;

  if (wsInstance) {
    const { ask_bid, trade_price, trade_volume } = wsInstance;
    const tradePrice = setPriceFormat(trade_price);
    const tradeVolume = setVolumeFormat(trade_price, trade_volume);

    webSocketTradeData = {
      ask_bid,
      trade_price,
      trade_volume,
      tradePrice,
      tradeVolume,
    };
  }

  return { webSocketTradeData };
};

const setPriceFormat = (price) => {
  if (price >= 100) {
    return price.toLocaleString('ko-KR');
  } else if (price >= 1) {
    return price.toFixed(2);
  } else {
    return price.toFixed(4);
  }
};

const setVolumeFormat = (price, volume) => {
  if (price >= 1) {
    return volume
      .toFixed(3)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return Math.floor(volume).toLocaleString('ko-KR');
  }
};

export default useWebSocketTradeData;
