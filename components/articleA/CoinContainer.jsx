import React from 'react';

import CoinMarket from './CoinMarket';
import CoinForeign from './CoinForeign';
import CoinChart from './CoinChart';

// ArticleA에 container부분을 담당 (ArticleA/CoinContainer)
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
