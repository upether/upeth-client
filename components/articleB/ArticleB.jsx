import React from 'react';

import ArticleTemplate from '../template/ArticleTemplate';
import CoinListSearch from './CoinListSearch';
import CoinListTab from './CoinListTab';

const ArticleB = () => {
  return (
    <ArticleTemplate>
      <CoinListSearch />
      <CoinListTab />
    </ArticleTemplate>
  );
};

export default ArticleB;
