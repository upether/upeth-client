import React from 'react';

import ArticleTemplate from '../template/ArticleTemplate';
import CoinHeader from './CoinHeader';
import CoinContainer from './CoinContainer';

// import Coin

const ArticleA = () => {
  return (
    <ArticleTemplate>
      <CoinHeader />
      <CoinContainer />
    </ArticleTemplate>
  );
};

export default ArticleA;
