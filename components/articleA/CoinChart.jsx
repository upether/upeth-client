import React from 'react';
import { Block } from './styles/CoinChart.styles';
import Chart from '../HighChart/Chart';

// ArticleA 코인 차트를 담당 (ArticleA/CoinContainer/CoinChart)
const CoinChart = () => {
  return (
    <Block>
      <Chart />
    </Block>
  );
};

export default CoinChart;
