import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react';
import useExchange from './../../hooks/useExchange';
import { useChartInfoOfMinutes } from '../../hooks/useChartInfo'

import isEqual from 'react-fast-compare';

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Indicators from "highcharts/indicators/indicators-all.js";
import DragPanes from "highcharts/modules/drag-panes.js";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
import PriceIndicator from "highcharts/modules/price-indicator.js";
import FullScreen from "highcharts/modules/full-screen.js";
import StockTools from "highcharts/modules/stock-tools.js";
import useWebSocketTrade from '../../hooks/websocket/useTradeWebSocket';


if (typeof Highcharts === 'object') {
    Indicators(Highcharts);
    DragPanes(Highcharts);
    AnnotationsAdvanced(Highcharts);
    PriceIndicator(Highcharts);
    FullScreen(Highcharts);
    StockTools(Highcharts);
}

const units = [[
    'minute',
    [1]
]];
const defaultOptions = {
    chart: {
        height: "inherit",
        marginRight: 55,
    },
    xAxis: [
        units
    ],
    yAxis: [
        {
            height: "80%",
            offset: 50
        },
        {
            top: "80%",
            height: "20%",
            offset: 0
        }
    ],
    series: [
        {
            type: 'candlestick',
            name: '',
            data: [1],
            id: 'BTC',
            yAxis: 0,
        }, {
            type: 'column',
            name: '거래량',
            data: [1],
            yAxis: 1,
        }
    ],
};

const Chart = React.memo(({ data, symbolID, options, setOptions }) => {
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={"stockChart"}
                options={options}
            />
        </div>
    );
});
Chart.displayName = "Chart";

const CoinMinhighChart = observer(({ period }) => {
    const { periodicity, periodicityNumber } = period;
    const exchangeStore = useExchange();
    const { symbolID = "KRW-BTC" } = exchangeStore;
    const { isLoading, isError, error, data, isSuccess } = useChartInfoOfMinutes({ symbolID, value: periodicityNumber, count: 200 });
    const [options, setOptions] = useState(defaultOptions);
    const [units, setUnits] = useState([[
        'minute',
        [periodicityNumber]
    ]]);
    const [ohlc, setOhlc] = useState([]);
    const [volume, setVolume] = useState([]);
    const { wsInstance } = useWebSocketTrade(symbolID);
    useEffect(() => {
        if (isSuccess) {
            let newOhlc = [...data.ohlc];
            let newVolume = [...data.volume];
            if (wsInstance !== null && newOhlc.length > 0) {
                const { timestamp: wsTimestamp, trade_price: wsTrade_price } = wsInstance;
                const [timestamp, opening_price, high_price, low_price, trade_price] = newOhlc.slice(-1)[0];
                const result = [
                    timestamp,
                    opening_price,
                    Math.max(high_price, wsTrade_price),
                    Math.min(low_price, wsTrade_price),
                    wsTrade_price
                ]
                newOhlc[newOhlc.length - 1] = result;
                setOhlc(newOhlc);
                setVolume(newVolume);
            }
        }
    }, [data, isSuccess, wsInstance])
    useEffect(() => {
        if (isSuccess) {
            let newOptions = { ...defaultOptions };
            newOptions.series[0].data = ohlc;
            newOptions.series[0].name = symbolID;
            newOptions.series[1].data = volume;
            newOptions.xAxis[0] = units;
            setOptions(newOptions);
        }
    }, [ohlc, volume, symbolID, isSuccess]);
    if (isLoading) {
        return <span>Loading...</span>;
    }
    if (isError) {
        return <span>Error: {error.message}</span>;
    }
    return <div><Chart data={data} symbolID={symbolID} options={options} setOhlc={setOhlc} setVolume={setVolume}></Chart></div>;
});

export default CoinMinhighChart;