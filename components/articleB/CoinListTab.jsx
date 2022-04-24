import React from 'react';
import { Block } from './styles/CoinListTab.styles';

import CoinListHeader from './CoinListHeader';
import CoinListSubHeader from './CoinListSubHeader';
import CoinListContainer from './CoinListContainer';

// ArticleB Tab를 담당 (ArticleB/CoinListTab)
const CoinListTab = () => {
  return (
    <Block>
      <CoinListHeader />
      <CoinListSubHeader />
      <CoinListContainer />
    </Block>
  );
};

export default CoinListTab;
