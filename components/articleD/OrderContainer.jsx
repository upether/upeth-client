import React from 'react';
import {
  Block,
  CheckOption,
  Price,
  MarginA,
  MarginB,
  Quantity,
  MarginC,
  FixedBottom,
} from './styles/OrderContainer.styles';

const OrderContainer = () => {
  return (
    <Block>
      <div>
        <dl>
          <dt className="checkOption">
            <strong>주문구분</strong>
          </dt>
          <CheckOption className="checkOption">
            <span>
              <a className="on">
                <em>-</em>
                지정가
              </a>
              <a className="disable">
                <em>-</em>
                시장가
              </a>
              <a className="disable">
                <em>-</em>
                예약-지정가
              </a>
            </span>
          </CheckOption>
          <dt className="price">
            <strong>주문가능</strong>
          </dt>
          <Price className="price">
            <strong>0</strong>
            <i>KRW</i>
          </Price>

          <dt className="marginA">
            <strong>매수가격</strong>
            <i>(KRW)</i>
          </dt>
          <MarginA className="marginA">
            <div>
              <input type="text" defaultValue="48,228,000" />
              <a className="minus">-</a>
              <a className="plus">+</a>
            </div>
          </MarginA>
          <dt className="marginB">
            <strong>주문수량</strong>
            <i>(BTC)</i>
          </dt>
          <MarginB className="marginB">
            <input type="text" placeholder="0" />
          </MarginB>
          <Quantity className="quantity">
            <a>10%</a>
            <a>25%</a>
            <a>50%</a>
            <a>100%</a>
            <a className="qtInput">직접입력</a>
          </Quantity>
          <dt className="marginC">
            <strong>주문총액</strong>
            <i>(KRW)</i>
          </dt>
          <MarginC className="marginC">
            <input type="text" placeholder="0" />
          </MarginC>
        </dl>
        <FixedBottom>
          <span>
            <p>수수료: 0.05%</p>
            <p>최소주문금액: 1,000 KRW</p>
          </span>
          <ul>
            <li className="ty01">
              <a>회원가입</a>
            </li>
            <li className="ty02">
              <a>로그인</a>
            </li>
          </ul>
        </FixedBottom>
      </div>
    </Block>
  );
};

export default OrderContainer;
