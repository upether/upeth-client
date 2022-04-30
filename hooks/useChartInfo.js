import { useQuery } from 'react-query';

export const useMiniChartInfoOfMinutes = ({
  symbolID: market = 'KRW-BTC',
  count = 150,
  refetchInterval = 10000,
}) => {
  return useQuery(
    ['useMinChartInfo', 'minutes', market],
    () => {
      return fetch(
        `https://api.upbit.com/v1/candles/minutes/1?market=${market}&count=${count}`
      ).then(async (res) => {
        const result = await res.json();
        return result.reverse();
      });
    },
    {
      refetchInterval,
    }
  );
};

export const useChartInfoOfMinutes = ({
  symbolID: market = 'KRW-BTC',
  value = 1,
  count = 150,
  refetchInterval = 10000,
}) => {
  return useQuery(
    ['useChartInfo', 'minutes', market],
    () => {
      return fetch(
        `https://api.upbit.com/v1/candles/minutes/${value}?market=${market}&count=${count}`
      )
        .then(async (res) => {
          const result = await res.json();
          // console.log("real data", res)
          return result;
        })
        .then((data = []) => {
          // console.log("real data", data)
          const result = { ohlc: [], volume: [] };
          data.reverse().forEach((el) => {
            const {
              timestamp, // 시간
              opening_price, // 시가
              high_price, // 고가
              low_price, // 저가
              trade_price, // 종가
              // candle_acc_trade_price, // 누적 거래 금액
              candle_acc_trade_volume, // 누적 거래량
            } = el;
            result.ohlc.push([
              timestamp,
              opening_price,
              high_price,
              low_price,
              trade_price,
            ]);
            result.volume.push([
              timestamp,
              +candle_acc_trade_volume.toFixed(0),
            ]);
          });
          //   console.log('result2', result);
          return result;
        });
    },
    {
      refetchInterval,
    }
  );
};

export const useChartInfoOfDaysWeeksMonths = ({
  type = `days`,
  symbolID: market = 'KRW-BTC',
  count = 200,
  refetchInterval = 10000,
}) => {
  return useQuery(
    [`useChartInfo`, type, market],
    () => {
      const url = `https://api.upbit.com/v1/candles/${type}`;
      const query = {
        market,
        count,
      };
      const queryString = '?';
      for (let [key, value] of Object.entries(query)) {
        queryString += `${key}=${value}&`;
      }
      const uri = url + queryString;
      //   console.log(uri);
      return fetch(uri)
        .then((response) => {
          return response.json();
        })
        .then((data = []) => {
          const result = { ohlc: [], volume: [] };
          data.reverse().forEach((el) => {
            const {
              timestamp, // 시간
              opening_price, // 시가
              high_price, // 고가
              low_price, // 저가
              trade_price, // 종가
              // candle_acc_trade_price, // 누적 거래 금액
              candle_acc_trade_volume, // 누적 거래량
            } = el;
            result.ohlc.push([
              timestamp,
              opening_price,
              high_price,
              low_price,
              trade_price,
            ]);
            result.volume.push([
              timestamp,
              +candle_acc_trade_volume.toFixed(0),
            ]);
          });
          //   console.log('result', result);
          return result;
        });
    },
    {
      refetchInterval,
    }
  );
};

// export const useChartInfoOfDaysWeeksMonths2 = ({ type = `days`, symbolID: market = "KRW-BTC", count = 200, refetchInterval = 10000 }) => {
//     return useQuery([`useChartInfo`, type, market], () => {
//         const url = `https://api.upbit.com/v1/candles/${type}`
//         const query = {
//             market,
//             count,
//         }
//         const queryString = "?";
//         for (let [key, value] of Object.entries(query)) {
//             queryString += `${key}=${value}&`
//         }
//         const uri = url + queryString;
//         console.log(uri)
//         return fetch(uri)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 const result = { ohlc: [], volume: [] };
//                 data.forEach((el) => {
//                     const {
//                         timestamp, // 시간
//                         opening_price, // 시가
//                         high_price, // 고가
//                         low_price, // 저가
//                         trade_price, // 종가
//                         // candle_acc_trade_price, // 누적 거래 금액
//                         candle_acc_trade_volume // 누적 거래량
//                     } = el;
//                     result.ohlc.push([
//                         timestamp,
//                         opening_price,
//                         high_price,
//                         low_price,
//                         trade_price
//                     ]);
//                     result.volume.push([timestamp, +candle_acc_trade_volume.toFixed(0)]);
//                 });
//                 console.log("result", result)
//                 return result;
//             });

//     },
//         {
//             refetchInterval,
//         }
//     )
// }
