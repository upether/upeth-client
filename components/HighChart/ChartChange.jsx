import React, { useState } from 'react';
import styled from '@emotion/styled';

const ChartChange = () => {
    const [chartType, setChartType] = useState("basicChart");
    return <div>
        <span className="chartChange__item active">
            <input type="radio" id="basicChart" name="chartToggle" readOnly="" value="basicChart" defaultChecked={chartType === 'basicChart'} />
            <label htmlFor="basicChart">
                <translate original="기본 차트">기본 차트</translate>
            </label>
        </span>
        <span className="chartChange__item">
            <input type="radio" id="tradingView" name="chartToggle" value="tradingView" defaultChecked={chartType === 'tradingView'} />
            <label htmlFor="tradingView">
                <translate original="트레이딩뷰">트레이딩뷰</translate>
            </label>
        </span>
    </div>
}

export default ChartChange;