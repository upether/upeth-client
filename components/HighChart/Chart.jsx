import React, { useState } from 'react';
import CoinhighChart from '../HighChart/CoinHighChart';
import CoinMinHighChart from '../HighChart/CoinMinHighChart';
import ChartNav from '../HighChart/ChartNav';

const CoinChart = () => {
    const [period, setPeriod] = useState({
        periodicity: "days",
        periodicityNumber: 1,
    })
    return <>
        <ChartNav period={period} setPeriod={setPeriod}></ChartNav>
        {period.periodicity === "minutes" && < CoinMinHighChart period={period} />}
        {period.periodicity !== "minutes" && <CoinhighChart period={period} />}
    </>;
};

export default CoinChart;
