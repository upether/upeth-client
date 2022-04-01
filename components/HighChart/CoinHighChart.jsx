import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react';
import useExchange from './../../hooks/useExchange';
import { useChartInfoOfDaysWeeksMonths } from '../../hooks/useChartInfo'


import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Indicators from "highcharts/indicators/indicators-all.js";
import DragPanes from "highcharts/modules/drag-panes.js";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
import PriceIndicator from "highcharts/modules/price-indicator.js";
import FullScreen from "highcharts/modules/full-screen.js";
import StockTools from "highcharts/modules/stock-tools.js";

if (typeof Highcharts === 'object') {
    Indicators(Highcharts);
    DragPanes(Highcharts);
    AnnotationsAdvanced(Highcharts);
    PriceIndicator(Highcharts);
    FullScreen(Highcharts);
    StockTools(Highcharts);
}

const units = [[
    'millisecond', // unit name
    [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
], [
    'second',
    [1, 2, 5, 10, 15, 30]
], [
    'minute',
    [1, 2, 5, 10, 15, 30]
], [
    'hour',
    [1, 2, 3, 4, 6, 8, 12]
], [
    'day',
    null
], [
    'week',
    null
], [
    'month',
    null
], [
    'year',
    null
]];

const defaultOptions = {
    chart: {
        // events: {
        //     click: (e) => {
        //         console.log(
        //             Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', e.xAxis[0].value),
        //             e.yAxis[0].value
        //         )
        //     }
        // }
    },
    yAxis: [
        {
            height: "80%"
        },
        {
            top: "80%",
            height: "20%",
            offset: 0
        }
    ],
    rangeSelector: {
        selected: 1
    },
    series: [
        {
            type: 'candlestick',
            name: '',
            data: [1, 2, 3],
            id: 'BTC',
            yAxis: 0,
        }, {
            type: 'column',
            name: '',
            data: [1, 2, 3],
            yAxis: 1,
        }
    ],
};

const Chart = ({ data, symbolID }) => {
    const [options, setOptions] = useState(defaultOptions);
    useEffect(() => {
        let newOptions = { ...defaultOptions };
        newOptions.series[0].data = data.ohlc.reverse();
        newOptions.series[0].name = symbolID;
        newOptions.series[1].data = data.volume.reverse();
        newOptions.series[1].name = "거래량";
        setOptions(newOptions);
        console.log(newOptions)
    }, [data, symbolID]);

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={"stockChart"}
                options={options}
            />
        </div>
    );
}
const CoinhighChart = observer(() => {
    const exchangeStore = useExchange();
    const { symbolID = "KRW-BTC" } = exchangeStore;
    const { isLoading, isError, error, data, isSuccess } = useChartInfoOfDaysWeeksMonths({ symbolID, count: 200 });
    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }
    return <div><Chart data={data} symbolID={symbolID}></Chart></div>;
    // return <div>{<Chart data={data}></Chart>}</div>;
});

export default CoinhighChart;