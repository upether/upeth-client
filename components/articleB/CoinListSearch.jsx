import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Block, Search, Setting } from './styles/CoinListSearch.styles';

import useExchange from '../../hooks/useExchange';

// ArticleB Search를 담당 (ArticleB/CoinListSearch)
const CoinListSearch = observer(() => {
  const exchangeStore = useExchange();

  // Input에 입력값에 따라 searchInput(전역상태) 수정
  const changeInput = useCallback((event) => {
    exchangeStore.setSearchInput(event.target.value);
  }, []);

  // X 버튼을 누를시에 searchInput(전역상태) 빈문자열로 수정
  const clearInput = useCallback((e) => {
    e.preventDefault();
    exchangeStore.setSearchInput('');
  }, []);

  // 검색버튼 클릭시 핸들러
  const clickSearch = useCallback((e) => {
    e.preventDefault();
  }, []);

  // 설정버튼 클릭시 핸들러
  const clickSetting = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Block>
      <Search>
        <input
          type='text'
          placeholder='코인명/심볼검색'
          onChange={changeInput}
          value={exchangeStore.searchInput}
        />
        {exchangeStore.searchInput !== '' && (
          <a className='btnX' href='#' onClick={(e) => clearInput(e)}>
            X
          </a>
        )}
        <a href='#' onClick={(e) => clickSearch(e)}>
          검색
        </a>
      </Search>
      <Setting>
        <a href='#' onClick={(e) => clickSetting(e)}>
          화면설정
        </a>
      </Setting>
    </Block>
  );
});

export default CoinListSearch;
