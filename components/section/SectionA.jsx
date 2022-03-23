import React from 'react';
import { Block } from './SectionA.styles';

import ArticleA from '../articleA/ArticleA';
import ArticleC from '../articleC/ArticleC';
import ArticleD from '../articleD/ArticleD';

function SectionA() {
  return (
    <Block>
      <ArticleA />
      <div>
        <div className="left">
          <ArticleC />
        </div>
        <div className="right">
          <ArticleD />
        </div>
      </div>
    </Block>
  );
}

export default SectionA;
