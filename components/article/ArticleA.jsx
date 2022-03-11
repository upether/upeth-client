import React from 'react';
import { Block } from './ArticleA.styles';

import Title from './Title';
import Market from './Market';
import Foreign from './Foreign';

function ArticleA() {
  return (
    <Block>
      <Title />
      <div>
        <Market />
        <Foreign />
      </div>
    </Block>
  );
}

export default ArticleA;
