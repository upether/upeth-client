import React from 'react';
import { Block } from './Right.styles';

import TabA from './TabA';
import Order from './Order';

function Right() {
  return (
    <Block>
      <article>
        <TabA />
        <Order />
      </article>
    </Block>
  );
}

export default Right;
