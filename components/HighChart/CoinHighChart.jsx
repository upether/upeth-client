import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import useExchange from './../../hooks/useExchange';
import { useChartInfoOfDaysWeeksMonths } from '../../hooks/useChartInfo';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import Indicators from 'highcharts/indicators/indicators-all.js';
import DragPanes from 'highcharts/modules/drag-panes.js';
import AnnotationsAdvanced from 'highcharts/modules/annotations-advanced.js';
import PriceIndicator from 'highcharts/modules/price-indicator.js';
import FullScreen from 'highcharts/modules/full-screen.js';
import StockTools from 'highcharts/modules/stock-tools.js';
import useWebSocketTrade from '../../hooks/websocket/useTradeWebSocket';

if (typeof Highcharts === 'object') {
  Indicators(Highcharts);
  DragPanes(Highcharts);
  AnnotationsAdvanced(Highcharts);
  PriceIndicator(Highcharts);
  FullScreen(Highcharts);
  StockTools(Highcharts);
}

const units = [
  ['minute', [1, 2, 5, 10, 15, 30]],
  ['hour', [1, 2, 3, 4, 6, 8, 12]],
  ['day', [1]],
  ['week', [1]],
  ['month', [1]],
  ['year', [1]],
];
const defaultOptions = {
  chart: {
    height: 'inherit',
    marginRight: 30,
  },
  xAxis: [units],

  yAxis: [
    {
      height: '80%',
      offset: 25,
    },
    {
      top: '80%',
      height: '20%',
      offset: 0,
    },
  ],
  series: [
    {
      type: 'candlestick',
      name: '',
      data: [],
      id: 'BTC',
      yAxis: 0,
    },
    {
      type: 'column',
      name: '거래량',
      data: [],
      yAxis: 1,
    },
  ],
};

const Chart = React.memo(({ data, symbolID, options, setOptions }) => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
});
Chart.displayName = 'Chart';

const CoinhighChart = observer(({ period }) => {
  const { periodicity, periodicityNumber } = period;
  const exchangeStore = useExchange();
  const { symbolID = 'KRW-BTC' } = exchangeStore;
  const { isLoading, isError, error, data, isSuccess } =
    useChartInfoOfDaysWeeksMonths({ type: periodicity, symbolID, count: 200 });
  const [options, setOptions] = useState(defaultOptions);
  const [ohlc, setOhlc] = useState([]);
  const [volume, setVolume] = useState([]);
  const { wsInstance } = useWebSocketTrade(symbolID);

  useEffect(() => {
    if (isSuccess) {
      let newOhlc = [...data.ohlc];
      let newVolume = [...data.volume];
      if (wsInstance !== null && newOhlc.length > 0) {
        const { timestamp: wsTimestamp, trade_price: wsTrade_price } =
          wsInstance;
        const [timestamp, opening_price, high_price, low_price, trade_price] =
          newOhlc.slice(-1)[0];
        const result = [
          timestamp,
          opening_price,
          Math.max(high_price, wsTrade_price),
          Math.min(low_price, wsTrade_price),
          wsTrade_price,
        ];
        newOhlc[newOhlc.length - 1] = result;
        setOhlc(newOhlc);
        setVolume(newVolume);
      }
    }
  }, [data, isSuccess, wsInstance]);
  useEffect(() => {
    if (isSuccess) {
      let newOptions = { ...defaultOptions };
      newOptions.series[0].data = ohlc;
      newOptions.series[0].name = symbolID;
      newOptions.series[1].data = volume;
      setOptions(newOptions);
    }
  }, [ohlc, volume, symbolID, isSuccess]);
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <Chart
        data={data}
        symbolID={symbolID}
        options={options}
        setOhlc={setOhlc}
        setVolume={setVolume}
      ></Chart>
    </div>
  );
});

export default CoinhighChart;
