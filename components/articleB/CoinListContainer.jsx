import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block } from './styles/CoinListContainer.styles';

import CoinListDefaultList from './CoinListDefaultList';
import CoinListBookrmarkList from './CoinListBookrmarkList';
import CoinListEmptyText from './CoinListEmptyText';
import useExchange from '../../hooks/useExchange';

// ArticleB Conainer를 담당 (ArticleB/CoinListTab/CoinListContainer)
const CoinListContainer = observer(() => {
  const exchangeStore = useExchange();

  const setBookmark = useCallback((market) => {
    const bookmark = localStorage.getItem('bookmark');
    if (bookmark) {
      const parseBookmark = JSON.parse(bookmark);
      if (!parseBookmark.includes(market)) {
        localStorage.setItem(
          'bookmark',
          JSON.stringify([...parseBookmark, market])
        );
      } else {
        localStorage.setItem(
          'bookmark',
          JSON.stringify(parseBookmark.filter((el) => el !== market))
        );
      }
    } else {
      localStorage.setItem('bookmark', JSON.stringify([market]));
    }
  }, []);

  if (
    typeof window !== 'undefined' &&
    localStorage.getItem('bookmark') === null
  ) {
    localStorage.setItem('bookmark', '[]');
  }

  return (
    <Block>
      <Scrollbars style={{ width: '100%', height: '770px' }} universal={true}>
        {exchangeStore.optionB === '보유' ? (
          <CoinListEmptyText />
        ) : exchangeStore.optionB === '관심' ? (
          <CoinListBookrmarkList
            setBookmark={setBookmark}
            subOptionB={exchangeStore.subOptionB}
            subOptionBool={exchangeStore.subOptionBool}
            searchInput={exchangeStore.searchInput}
          />
        ) : (
          <CoinListDefaultList
            setBookmark={setBookmark}
            pairID={exchangeStore.pairID}
            subOptionB={exchangeStore.subOptionB}
            subOptionBool={exchangeStore.subOptionBool}
            searchInput={exchangeStore.searchInput}
          />
        )}
      </Scrollbars>
    </Block>
  );
});

export default CoinListContainer;
