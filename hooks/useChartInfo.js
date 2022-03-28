// import { useQuery } from 'react-query';

// const useChartInfo = (marketId) => {
//     const { data = [] } = useQuery(['useChartInfo', marketId], () => {
//         fetch(`https://api.upbit.com/v1/candles/days/?market=${marketId}&count=10`).then(
//             async (res) => {
//                 const result = await res.json();
//                 console.log(result)
//                 return result;
//             }
//         )
//     })
//     const chartData = data.map(({ candle_date_time_kst, trade_price }) => {
//         return { candle_date_time_kst, trade_price }
//     })
//     return { chartData };
// }
// export default useChartInfo;