import React from 'react';
import { Block, Half } from './SectionA.styles';

import MarketA from '../market/MarketA';
import ForeignA from '../foreign/ForeignA';
import TitA from '../tit/TitA';
import Left from '../left/Left';
import Right from '../right/Right';

function SectionA() {
  return (
    <Block>
      <article>
        <TitA />
        <div>
          <MarketA />
          <ForeignA />
        </div>
      </article>
      <Half>
        <Left />
        <Right />
      </Half>
    </Block>
  );
}

export default SectionA;
