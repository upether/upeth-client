import React from 'react';
import { Block } from './styles/CoinListTab.styles';

import CoinListHeader from './CoinListHeader';
import CoinListContainer from './CoinListContainer';
import CoinListSubHeader from './CoinListSubHeader';
import CoinListContainerB from './CoinListContainerB';

// ArticleB Tab를 담당 (ArticleB/CoinListTab)
const CoinListTab = () => {
  return (
    <Block>
      <CoinListHeader />
      <CoinListSubHeader />
      {/* <CoinListContainer /> */}
      <CoinListContainerB />
    </Block>
  );
};

export default CoinListTab;
