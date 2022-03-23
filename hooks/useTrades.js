import { useQuery } from 'react-query';

const useTrades = (symbolID) => {
  const { data = [] } = useQuery(['tradesData', symbolID], () =>
    fetch(
      `https://api.upbit.com/v1/trades/ticks?market=${symbolID}&count=30`
    ).then((res) => res.json())
  );

  const tradesData = data.map((el) => {
    const { ask_bid, trade_price, trade_volume } = el;
    const tradePrice = setPriceFormat(trade_price);
    const tradeVolume = setVolumeFormat(trade_price, trade_volume);
    return { ask_bid, trade_price, trade_volume, tradePrice, tradeVolume };
  });

  return { tradesData };
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

export default useTrades;
