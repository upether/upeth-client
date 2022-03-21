import React from 'react';

import ArticleTemplate from '../template/ArticleTemplate';
import TitleA from './TitleA';
import MarketA from './MarketA';
import ForeignA from './ForeignA';

function ArticleA() {
  return (
    <ArticleTemplate>
      <TitleA />
      <div>
        <MarketA />
        <ForeignA />
      </div>
    </ArticleTemplate>
  );
}

export default ArticleA;
