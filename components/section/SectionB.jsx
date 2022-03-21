import React from 'react';
import { Block } from './SectionB.styles';

import ArticleTemplate from '../template/ArticleTemplate';
import SearchB from '../search/SearchB';
import TabB from '../tab/TabB';

function SectionB() {
  return (
    <Block>
      <ArticleTemplate>
        <SearchB />
        <TabB />
      </ArticleTemplate>
    </Block>
  );
}

export default SectionB;
