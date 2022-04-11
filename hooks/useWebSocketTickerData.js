// WebSocket TickerData 가공하기
// 사용되는 곳 CoinMarket
const useWebSocketTickerData = (wsInstance) => {
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

export default useWebSocketTickerData;
