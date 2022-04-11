import React from 'react';

import ArticleTemplate from '../template/ArticleTemplate';
import CoinTitle from './CoinTitle';
import CoinMarket from './CoinMarket';
import CoinForeign from './CoinForeign';
import CoinChart from './CoinChart';
import CoinHeader from './CoinHeader';
import CoinContainer from './CoinContainer';

// import Coin

const ArticleA = () => {
  return (
    <ArticleTemplate>
      <CoinHeader />
      {/* <CoinTitle /> */}
      <CoinContainer />
      {/* <div>
        <CoinMarket />
        <CoinForeign />
        <CoinChart />
      </div> */}
    </ArticleTemplate>
  );
};

export default ArticleA;
