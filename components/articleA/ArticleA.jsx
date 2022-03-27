import React from 'react';

import ArticleTemplate from '../template/ArticleTemplate';
import CoinTitle from './CoinTitle';
import CoinMarket from './CoinMarket';
import CoinForeign from './CoinForeign';
import CoinChart from './CoinChart';

function ArticleA() {
  return (
    <ArticleTemplate>
      <CoinTitle />
      <div>
        <CoinMarket />
        <CoinForeign />
        <CoinChart />
      </div>
    </ArticleTemplate>
  );
}

export default ArticleA;
