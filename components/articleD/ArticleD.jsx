import React from 'react';

import ArticleTemplate from '../template/ArticleTemplate';
import OrderD from './OrderD';
import TabD from './TabD';

const ArticleD = () => {
  return (
    <ArticleTemplate>
      <TabD />
      <OrderD />
    </ArticleTemplate>
  );
};

export default ArticleD;
