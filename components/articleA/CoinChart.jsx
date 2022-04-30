// import React, { useState } from 'react';
// import { Block } from './styles/CoinChart.styles';
// import CoinhighChart from '../HighChart/CoinHighChart';
// import ChartNav from '../HighChart/ChartNav';

// const CoinChart = () => {
//   const [periodicity, setPeriodicity] = useState('days 1')


//   return <Block>
//     <ChartNav periodicity={periodicity} setPeriodicity={setPeriodicity}></ChartNav>
//     <CoinhighChart periodicity={periodicity} />
//   </Block>;
// };

// export default CoinChart;


import React, { useState } from 'react';
import { Block } from './styles/CoinChart.styles';
import Chart from '../HighChart/Chart';

// ArticleA 코인 차트를 담당 (ArticleA/CoinContainer/CoinChart)
const CoinChart = () => {
  return <Block>
    <Chart></Chart>
  </Block>;
};

export default CoinChart;