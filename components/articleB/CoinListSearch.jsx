import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Block, Search, Setting } from './styles/CoinListSearch.styles';

import useExchange from '../../hooks/useExchange';

const CoinListSearch = observer(() => {
  const exchangeStore = useExchange();

  const changeInput = useCallback((event) => {
    exchangeStore.setSearchInput(event.target.value);
  }, []);

  const clearInput = useCallback(() => {
    exchangeStore.setSearchInput('');
  }, []);

  return (
    <Block>
      <Search>
        <input
          type="text"
          placeholder="코인명/심볼검색"
          onChange={changeInput}
          value={exchangeStore.searchInput}
        />
        {exchangeStore.searchInput !== '' && (
          <a className="btnX" href="#" onClick={clearInput}>
            X
          </a>
        )}
        <a href="#">검색</a>
      </Search>
      <Setting>
        <a href="#">화면설정</a>
      </Setting>
    </Block>
  );
});

export default CoinListSearch;
