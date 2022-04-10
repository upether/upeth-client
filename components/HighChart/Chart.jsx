import React, { useState } from 'react';
import CoinhighChart from '../HighChart/CoinHighChart';
import ChartNav from '../HighChart/ChartNav';

const CoinChart = () => {
    const [periodicity, setPeriodicity] = useState('days 1')
    return <>
        <ChartNav periodicity={periodicity} setPeriodicity={setPeriodicity}></ChartNav>
        <CoinhighChart periodicity={periodicity} />
    </>;
};

export default CoinChart;
