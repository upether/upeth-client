import React, { useState, useCallback } from 'react';
import { Block } from './styles/OrderbookHeader.styles';

// Tab에서 Item을 담당
const TabItem = ({ children, option, setOptionState }) => {
  const clickTabItem = useCallback((e) => {
    e.preventDefault();
    setOptionState(children);
  }, []);

  return (
    <li>
      <a
        className={option === children ? 'on' : ''}
        href="#"
        onClick={(e) => clickTabItem(e)}
      >
        {children}
      </a>
    </li>
  );
};

// Tab에서 List를 담당
const TabList = () => {
  const [option, setOption] = useState('일반호가');
  const setOptionState = useCallback((optionState) => {
    setOption(optionState);
  }, []);

  return (
    <ul>
      <TabItem option={option} setOptionState={setOptionState}>
        일반호가
      </TabItem>
      <TabItem option={option} setOptionState={setOptionState}>
        누적호가
      </TabItem>
      <TabItem option={option} setOptionState={setOptionState}>
        호가주문
      </TabItem>
    </ul>
  );
};

// ArticleC에 header부분을 담당 (ArticleC/OrderbookHeader)
const OrderbookHeader = () => {
  return (
    <Block>
      <TabList />
    </Block>
  );
};

export default OrderbookHeader;
