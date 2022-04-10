const useWebSocketOrderbook = (wsInstance) => {
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
      const askSize = setVolumeFormat(ask_price, ask_size);
      return { askPrice, askSize, ask_size, ask_size };
    });

    bidData = orderbook_units.reverse().map((el) => {
      const { bid_price, bid_size } = el;
      const bidPrice = setPriceFormat(bid_price);
      const bidSize = setVolumeFormat(bid_price, bid_size);
      return { bidPrice, bidSize, bid_price, bid_size };
    });
  }

  return { totalAskSize, totalBidSize, askData, bidData };
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

const setVolumeFormat = (price, volume) => {
  if (price >= 1) {
    return volume
      .toFixed(3)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return Math.floor(volume);
  }
};

export default useWebSocketOrderbook;
