import React from 'react';

import ArticleTemplate from '../template/ArticleTemplate';
import OrderbookHeader from './OrderbookHeader';
import OrderbookContainer from './OrderbookContainer';

const ArticleC = () => {
  return (
    <ArticleTemplate>
      <OrderbookHeader />
      <OrderbookContainer />
    </ArticleTemplate>
  );
};

export default ArticleC;
