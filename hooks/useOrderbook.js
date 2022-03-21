import { useQuery } from 'react-query';

const useOrderbook = () => {
  const { data = {} } = useQuery('orderbookData', () =>
    fetch(`https://api.upbit.com/v1/orderbook?markets=KRW-BTC`).then((res) =>
      res.json()
    )
  );

  // console.log(data[0]);

  const askData = data[0]?.orderbook_units.reverse().map((el) => {
    const { ask_price, ask_size } = el;
    return { ask_price, ask_size };
  });

  const bidData = data[0]?.orderbook_units.reverse().map((el) => {
    const { bid_price, bid_size } = el;
    return { bid_price, bid_size };
  });

  return { askData, bidData };

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
  //       {
  //         ask_price: 5.112e7,
  //         bid_price: 5.109e7,
  //         ask_size: 0.07704041,
  //         bid_size: 0.1409279,
  //       },
  //       {
  //         ask_price: 5.1121e7,
  //         bid_price: 5.1088e7,
  //         ask_size: 0.09781291,
  //         bid_size: 0.00097977,
  //       },
  //       {
  //         ask_price: 5.1124e7,
  //         bid_price: 5.1085e7,
  //         ask_size: 0.02183857,
  //         bid_size: 0.00117451,
  //       },
  //       {
  //         ask_price: 5.1125e7,
  //         bid_price: 5.1082e7,
  //         ask_size: 0.02994769,
  //         bid_size: 0.00050892,
  //       },
  //       {
  //         ask_price: 5.1126e7,
  //         bid_price: 5.1081e7,
  //         ask_size: 0.02792836,
  //         bid_size: 0.00482464,
  //       },
  //       {
  //         ask_price: 5.1127e7,
  //         bid_price: 5.108e7,
  //         ask_size: 0.65643645,
  //         bid_size: 0.02,
  //       },
  //       {
  //         ask_price: 5.1128e7,
  //         bid_price: 5.1079e7,
  //         ask_size: 0.01981717,
  //         bid_size: 0.00335735,
  //       },
  //       {
  //         ask_price: 5.113e7,
  //         bid_price: 5.1074e7,
  //         ask_size: 0.14758295,
  //         bid_size: 0.01792348,
  //       },
  //       {
  //         ask_price: 5.1131e7,
  //         bid_price: 5.1071e7,
  //         ask_size: 0.00999262,
  //         bid_size: 0.04509567,
  //       },
  //       {
  //         ask_price: 5.1132e7,
  //         bid_price: 5.107e7,
  //         ask_size: 0.01585111,
  //         bid_size: 0.093309,
  //       },
  //       {
  //         ask_price: 5.1133e7,
  //         bid_price: 5.1069e7,
  //         ask_size: 0.00010864,
  //         bid_size: 0.00455833,
  //       },
  //       {
  //         ask_price: 5.1134e7,
  //         bid_price: 5.1068e7,
  //         ask_size: 0.03188482,
  //         bid_size: 0.00687445,
  //       },
  //       {
  //         ask_price: 5.1135e7,
  //         bid_price: 5.1067e7,
  //         ask_size: 0.04152154,
  //         bid_size: 0.0092512,
  //       },
  //     ],
  //   },
  // ];
};

export default useOrderbook;
