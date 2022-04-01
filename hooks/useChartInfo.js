import { useQuery } from 'react-query';

export const useChartInfoOfMinutes = ({ symbolID: market = "KRW-BTC", count = 150 }) => {
    return useQuery(['useChartInfo', "minutes", market], () => {
        return fetch(`https://api.upbit.com/v1/candles/minutes/1?market=${market}&count=${count}`).then(
            async (res) => {
                const result = await res.json();
                return result;
            }
        )
    },
        {
            refetchInterval: 10000,
        }
    )
}

export const useChartInfoOfDaysWeeksMonths = ({ type = `days`, symbolID: market = "KRW-BTC", count = 200 }) => {
    return useQuery([`useChartInfo`, type, market], () => {
        const url = `https://api.upbit.com/v1/candles/${type}`
        const query = {
            market,
            count,
        }
        const queryString = "?";
        for (let [key, value] of Object.entries(query)) {
            queryString += `${key}=${value}&`
        }
        const uri = url + queryString;
        console.log(uri)
        return fetch(uri)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const result = { ohlc: [], volume: [] };
                data.forEach((el) => {
                    const {
                        timestamp, // 시간
                        opening_price, // 시가
                        high_price, // 고가
                        low_price, // 저가
                        trade_price, // 종가
                        // candle_acc_trade_price, // 누적 거래 금액
                        candle_acc_trade_volume // 누적 거래량
                    } = el;
                    result.ohlc.push([
                        timestamp,
                        opening_price,
                        high_price,
                        low_price,
                        trade_price
                    ]);
                    result.volume.push([timestamp, +candle_acc_trade_volume.toFixed(0)]);
                });
                console.log("result", result)
                return result;
            });

    },
    )
}
export const useChartInfoWeeks = (marketId = "KRW-BTC") => {
    const { status, isLoading, isSuccess, error, data = [] } = useQuery(['useChartInfoWeeks', marketId], () => {
        console.log(`https://api.upbit.com/v1/candles/weeks?market=${marketId}&count=30`)
        return fetch(`https://api.upbit.com/v1/candles/weeks?market=${marketId}&count=30`).then(
            async (res) => {
                const result = await res.json();
                const result2 = { ohlc: [], volume: [] };
                result.map(el => {
                    const {
                        timestamp, // 시간
                        opening_price,  // 시가
                        high_price, // 고가
                        low_price, // 저가
                        trade_price, // 종가
                        candle_acc_trade_price, // 누적 거래 금액
                        candle_acc_trade_volume // 누적 거래량
                    } = el;
                    result2.ohlc.push([timestamp, opening_price, high_price, low_price, trade_price]);
                    result2.volume.push([timestamp, +candle_acc_trade_volume.toFixed(0)]);
                })
                console.log(result2)
                return result2;
            }
        )
    },
        {
            refetchInterval: 10000,
        }
    )
    return { status, isLoading, isSuccess, error, data }
}
export const useChartInfoMonths = (marketId = "KRW-BTC") => {
    const { status, isLoading, error, data = [] } = useQuery(['useChartInfoMonths', marketId], () => {
        console.log(`https://api.upbit.com/v1/candles/months?market=${marketId}&count=30`)
        return fetch(`https://api.upbit.com/v1/candles/months?market=${marketId}&count=30`).then(
            async (res) => {
                const result = await res.json();
                const result2 = { ohlc: [], volume: [] };
                result.map(el => {
                    const {
                        timestamp, // 시간
                        opening_price,  // 시가
                        high_price, // 고가
                        low_price, // 저가
                        trade_price, // 종가
                        candle_acc_trade_price, // 누적 거래 금액
                        candle_acc_trade_volume // 누적 거래량
                    } = el;
                    result2.ohlc.push([timestamp, opening_price, high_price, low_price, trade_price]);
                    result2.volume.push([timestamp, +candle_acc_trade_volume.toFixed(0)]);
                })
                console.log(result2)
                return result2;
            }
        )
    },
        // {
        //     // Refetch the data every second
        //     refetchInterval: 10000,
        // }
    )
    return { status, isLoading, error, data }
}
