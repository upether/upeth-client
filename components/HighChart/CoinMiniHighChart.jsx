import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useMiniChartInfoOfMinutes } from '../../hooks/useChartInfo';
import { observer } from 'mobx-react';
import useExchange from './../../hooks/useExchange';

const CoinMiniHighChart = observer(() => {
  const exchangeStore = useExchange();
  const { symbolID = 'KRW-BTC' } = exchangeStore;
  const {
    status,
    isLoading,
    error,
    data = [],
  } = useMiniChartInfoOfMinutes({ symbolID, count: 200 });
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  const getIndexFromSplitData = (data) => {
    const pivotPrice = data[0]['trade_price'];
    const splitPriceData = [];
    for (let i = 1; i < data.length; i++) {
      const flag = data[i].trade_price > pivotPrice;
      splitPriceData.push({ color: flag ? 'red' : 'blue', value: i });
    }
    return splitPriceData;
  };

  const options = {
    title: {
      text: '',
      style: {
        display: 'none',
      },
    },
    subtitle: {
      text: '',
      style: {
        display: 'none',
      },
    },
    yAxis: {
      gridLineColor: 'transparent',
      title: {
        style: {
          display: 'none',
        },
      },
      labels: {
        enabled: false,
        style: {
          display: 'none',
        },
      },
    },
    xAxis: {
      lineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: 'transparent',
      minorTickLength: 0,
      tickLength: 0,
      title: {
        style: {
          display: 'none',
        },
      },
      labels: {
        enabled: false,
        style: {
          display: 'none',
        },
      },
    },
    series: [
      {
        data: [...data.map((el) => el.trade_price)],
        lineWidth: 1,
        zoneAxis: 'x',
        zones: [...getIndexFromSplitData(data)],
        states: {
          hover: {
            enabled: false,
          },
        },
        marker: {
          enabled: false,
        },
      },
    ],
    tooltip: {
      enabled: false,
      style: {
        display: 'none',
      },
    },
    chart: {
      height: 100,
      width: 100,
    },
  };
  return (
    <div>{<HighchartsReact highcharts={Highcharts} options={options} />}</div>
  );
});

export default CoinMiniHighChart;
