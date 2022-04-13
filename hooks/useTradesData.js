// Rest API Trades 데이터 가공하기
// 사용되는 곳 OrderbookBid
const useTradesData = (rawTradesData) => {
  const tradesData = rawTradesData.map((el) => {
    const { ask_bid, trade_price, trade_volume } = el;
    const tradePrice = setPriceFormat(trade_price);
    const tradeVolume = setVolumeFormat(trade_price, trade_volume);
    return { ask_bid, trade_price, trade_volume, tradePrice, tradeVolume };
  });

  return { tradesData };
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

export default useTradesData;
