import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';

import { createChart } from 'lightweight-charts';
import useChartInfo from '../../hooks/useChartInfo';

const Wrapper = styled.div``


const Chart = () => {
    const chartRef = useRef();
    const newChartRef = useRef();
    // const marketId = "KRW-BTC"
    // const [newData, setData] = useState([{ time: 1571622840, value: 50.1156 }]);

    // const { status, data, error, loading, isFetching } = useQuery(['useChartInfo', marketId], () => {
    //     fetch(`https://api.upbit.com/v1/candles/minutes/1?market=${marketId}&count=10`)
    //         .then(
    //             async (res) => {
    //                 const data = await res.json();
    //                 const result = data.map(v => {
    //                     console.log({ time: v.timestamp, value: +v.trade_price })
    //                     return { time: v.timestamp, value: +v.trade_price }
    //                 })
    //                 return result;
    //             }
    //         )
    //         .catch(error => []),
    //     {
    //         refetchInterval: 1000,
    //     }
    // })

    // React.useLayoutEffect(() => {
    //     chartRef.current.remove();
    //     const chart = createChart(chartRef.current, {
    //         width: 140,
    //         height: 50,
    //         layout: {
    //             backgroundColor: '#ffffff',
    //             textColor: 'rgba(33, 56, 77, 1)',
    //         },
    //         grid: {
    //             vertLines: {
    //                 color: 'rgba(197, 203, 206, 0.7)',
    //             },
    //             horzLines: {
    //                 color: 'rgba(197, 203, 206, 0.7)',
    //             },
    //         },
    //     });
    //     console.log("asdf")
    //     const areaSeries = chart.addAreaSeries();
    //     // chart.timeScale().fitContent();
    //     console.log(data)
    //     areaSeries.setData(data);
    // }, [data])
    return (
        <div className="chart-container">
            <div ref={chartRef} />
        </div>
    );
}
export default Chart;