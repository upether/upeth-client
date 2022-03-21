import React from 'react';
import { Block } from './SectionA.styles';

import ArticleA from '../articleA/ArticleA';
import Right from '../right/Right';
import ArticleC from '../articleC/ArticleC';

function SectionA() {
  return (
    <Block>
      <ArticleA />
      <div>
        <div className="left">
          <ArticleC />
        </div>
        {/* <div className="right"></div> */}
        <Right />
      </div>
    </Block>
  );
}

export default SectionA;
