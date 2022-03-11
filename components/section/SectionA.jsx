import React from 'react';
import { Block, Half } from './SectionA.styles';

import ArticleA from '../article/ArticleA';
import Left from '../left/Left';
import Right from '../right/Right';

function SectionA() {
  return (
    <Block>
      {/* <article>
        <TitA />
        <div>
          <MarketA />
          <ForeignA />
        </div>
      </article> */}
      <ArticleA />
      <Half>
        <Left />
        <Right />
      </Half>
    </Block>
  );
}

export default SectionA;
