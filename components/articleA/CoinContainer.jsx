import React from 'react';

import CoinMarket from './CoinMarket';
import CoinForeign from './CoinForeign';
import CoinChart from './CoinChart';

const CoinContainer = () => {
  return (
    <div>
      <CoinMarket />
      <CoinForeign />
      <CoinChart />
    </div>
  );
};

export default CoinContainer;
