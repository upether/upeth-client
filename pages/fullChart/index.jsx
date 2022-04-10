import React from 'react';

import PageTemplate from '../../components/base/PageTemplate';
import Chart from '../../components/HighChart/Chart';

function FullChart() {
  return <PageTemplate><Chart style={{ height: "1500px", width: "100%" }}></Chart></PageTemplate>;
}

export default FullChart;
