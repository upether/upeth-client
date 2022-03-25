import React, { useState, useCallback } from 'react';
import useInput from '../../hooks/useInput';
import {
  Block,
  CheckOptionBlock,
  PriceBlock,
  MarginBlockA,
  MarginBlockB,
  QuantityBlock,
  MarginBlockC,
  FixedBottomBlock,
} from './styles/OrderContainer.styles';

const CheckOption = () => {
  const [option, setOption] = useState('지정가');

  const clickCheckOption = useCallback((e, optionState) => {
    e.preventDefault();
    setOption(optionState);
  }, []);

  return (
    <>
      <dt className="checkOption">
        <strong>주문구분</strong>
      </dt>
      <CheckOptionBlock className="checkOption">
        <span>
          <a
            className={option === '지정가' ? 'on' : 'disable'}
            href="#"
            onClick={(e) => clickCheckOption(e, '지정가')}
          >
            <em>-</em>
            지정가
          </a>
          <a
            className={option === '시장가' ? 'on' : 'disable'}
            href="#"
            onClick={(e) => clickCheckOption(e, '시장가')}
          >
            <em>-</em>
            시장가
          </a>
          <a
            className={option === '예약-지정가' ? 'on' : 'disable'}
            href="#"
            onClick={(e) => clickCheckOption(e, '예약-지정가')}
          >
            <em>-</em>
            예약-지정가
          </a>
        </span>
      </CheckOptionBlock>
    </>
  );
};

const Price = () => {
  // 보유 현금액 확인
  return (
    <>
      <dt className="price">
        <strong>주문가능</strong>
      </dt>
      <PriceBlock className="price">
        <strong>0</strong>
        <i>KRW</i>
      </PriceBlock>
    </>
  );
};

const MarginA = () => {
  const { inputValue, inputRef, keyDownInput, changeInput } = useInput();

  const clickPlus = useCallback((e) => {
    e.preventDefault();
  }, []);

  const clickMinus = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <>
      <dt className="marginA">
        <strong>매수가격</strong>
        <i>(KRW)</i>
      </dt>
      <MarginBlockA className="marginA">
        <div>
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onKeyDown={(e) => keyDownInput(e)}
            onChange={(e) => changeInput(e)}
          />
          <a className="minus" href="#" onClick={clickPlus}>
            -
          </a>
          <a className="plus" href="#" onClick={clickMinus}>
            +
          </a>
        </div>
      </MarginBlockA>
    </>
  );
};

const MarginB = () => {
  return (
    <>
      <dt className="marginB">
        <strong>주문수량</strong>
        <i>(BTC)</i>
      </dt>
      <MarginBlockB className="marginB">
        <input type="text" placeholder="0" />
      </MarginBlockB>
    </>
  );
};

const Quantity = () => {
  return (
    <QuantityBlock className="quantity">
      <a>10%</a>
      <a>25%</a>
      <a>50%</a>
      <a>100%</a>
      <a className="qtInput">직접입력</a>
    </QuantityBlock>
  );
};

const MarginC = () => {
  return (
    <>
      <dt className="marginC">
        <strong>주문총액</strong>
        <i>(KRW)</i>
      </dt>
      <MarginBlockC className="marginC">
        <input type="text" placeholder="0" />
      </MarginBlockC>
    </>
  );
};

const FixedBottom = () => {
  const clickSignup = useCallback((e) => {
    e.preventDefault();
  }, []);

  const clickSignin = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <FixedBottomBlock>
      <span>
        <p>수수료: 0.05%</p>
        <p>최소주문금액: 1,000 KRW</p>
      </span>
      <ul>
        <li className="ty01">
          <a href="#" onClick={(e) => clickSignup(e)}>
            회원가입
          </a>
        </li>
        <li className="ty02">
          <a href="#" onClick={(e) => clickSignin(e)}>
            로그인
          </a>
        </li>
      </ul>
    </FixedBottomBlock>
  );
};

const OrderContainer = () => {
  return (
    <Block>
      <div>
        <dl>
          <CheckOption />
          <Price />
          <MarginA />
          <MarginB />
          <Quantity />
          <MarginC />
        </dl>
        <FixedBottom />
      </div>
    </Block>
  );
};

export default OrderContainer;
