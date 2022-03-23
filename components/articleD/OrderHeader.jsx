import React, { useState, useCallback } from 'react';
import { Block } from './styles/OrderHeader.styles';

const TabItem = ({ children, option, setOptionState, stylesOn }) => {
  const clickTabItem = useCallback((e) => {
    e.preventDefault();
    setOptionState(children);
  });

  return (
    <li>
      <a
        className={option === children ? stylesOn : ''}
        href="#"
        onClick={(e) => clickTabItem(e)}
      >
        {children}
      </a>
    </li>
  );
};

const TabList = () => {
  const [option, setOption] = useState('매수');
  const setOptionState = useCallback((optionState) => {
    setOption(optionState);
  }, []);

  return (
    <ul>
      <TabItem
        option={option}
        setOptionState={setOptionState}
        stylesOn="buy__on"
      >
        매수
      </TabItem>
      <TabItem
        option={option}
        setOptionState={setOptionState}
        stylesOn="sell__on"
      >
        매도
      </TabItem>
      <TabItem option={option} setOptionState={setOptionState} stylesOn="on">
        간편주문
      </TabItem>
      <TabItem option={option} setOptionState={setOptionState} stylesOn="on">
        거래내역
      </TabItem>
    </ul>
  );
};

const OrderHeader = () => {
  return (
    <Block>
      <TabList />
    </Block>
  );
};

export default OrderHeader;
