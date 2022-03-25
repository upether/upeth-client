import React, { useState, useCallback } from 'react';
import { Block, Search, Setting } from './styles/SearchB.styles';

const SearchB = () => {
  const [input, setInput] = useState('');

  const changeInput = useCallback((event) => {
    setInput(event.target.value);
  }, []);

  const clearInput = useCallback(() => {
    setInput('');
  }, []);

  return (
    <Block>
      <Search>
        <input
          type="text"
          placeholder="코인명/심볼검색"
          onChange={changeInput}
          value={input}
        />
        {input !== '' && (
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
};

export default SearchB;
