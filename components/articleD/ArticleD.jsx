import React from 'react';

import ArticleTemplate from '../template/ArticleTemplate';
import OrderHeader from './OrderHeader';
import OrderContainer from './OrderContainer';

const ArticleD = () => {
  return (
    <ArticleTemplate>
      <OrderHeader />
      <OrderContainer />
    </ArticleTemplate>
  );
};

export default ArticleD;
