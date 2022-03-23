import { useQuery } from 'react-query';

const useOrderbook = (symbolID) => {
  const { data = [] } = useQuery(['orderbookData', symbolID], () =>
    fetch(`https://api.upbit.com/v1/orderbook?markets=${symbolID}`).then(
      (res) => res.json()
    )
  );

  let totalAskSize;
  let totalBidSize;

  if (data[0]) {
    const { total_ask_size, total_bid_size } = data[0];
    totalAskSize = total_ask_size;
    totalBidSize = total_bid_size;
  }

  const askData = data[0]?.orderbook_units.reverse().map((el) => {
    const { ask_price, ask_size } = el;
    const askPrice = setPriceFormat(ask_price);
    const askSize = setVolumeFormat(ask_price, ask_size);
    return { askPrice, askSize, ask_price, ask_size };
  });

  const bidData = data[0]?.orderbook_units.reverse().map((el) => {
    const { bid_price, bid_size } = el;
    const bidPrice = setPriceFormat(bid_price);
    const bidSize = setVolumeFormat(bid_price, bid_size);
    return { bidPrice, bidSize, bid_price, bid_size };
  });

  return { totalAskSize, totalBidSize, askData, bidData };

  // [
  //   {
  //     market: 'KRW-BTC',
  //     timestamp: 1647765250895,
  //     total_ask_size: 2.37672925,
  //     total_bid_size: 3.64262316,
  //     orderbook_units: [
  //       {
  //         ask_price: 5.1117e7,
  //         bid_price: 5.1097e7,
  //         ask_size: 1.14683423,
  //         bid_size: 0.00204514,
  //       },
  //       {
  //         ask_price: 5.1118e7,
  //         bid_price: 5.1096e7,
  //         ask_size: 0.05213178,
  //         bid_size: 3.2917928,
  //       },
  //     ],
  //   },
  // ];
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

export default useOrderbook;
