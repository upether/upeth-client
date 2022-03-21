import React from 'react';

import ArticleTemplate from '../template/ArticleTemplate';
import SearchB from './SearchB';
import TabB from './TabB';

const ArticleB = () => {
  return (
    <ArticleTemplate>
      <SearchB />
      <TabB />
    </ArticleTemplate>
  );
};

export default ArticleB;
