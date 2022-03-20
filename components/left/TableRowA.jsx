import React from 'react';
import {
  Block,
  Bar,
  Down,
  TypeFormA,
  TypeFormB,
  Inner,
} from './TableRowA.styles';

function TableRowA({ idx, data }) {
  return (
    <Block>
      <td></td>
      <Bar>
        <a href="#">
          <div style={{ width: '9.01613%' }}>-</div>
          {/* <p>0.636</p> */}
          <p>{data.ask_size}</p>
        </a>
      </Bar>
      <Down>
        <a href="#">
          <TypeFormA>
            {/* <strong>50,870,000</strong> */}
            <strong>{data.ask_price}</strong>
          </TypeFormA>
          <TypeFormB>-1.87%</TypeFormB>
        </a>
      </Down>
      {idx === 0 && (
        <Inner colSpan="2" rowSpan="15">
          <dl>
            <dt>거래량</dt>
            <dd>
              6,294<i>BTC</i>
            </dd>
            <dt>거래대금</dt>
            <dd>
              325,801<i>백만원</i>
              <em>(최근24시간)</em>
            </dd>
          </dl>
          <dl>
            <dt>52주 최고</dt>
            <dd className="up">
              82,700,000
              <em>(2021.11.09)</em>
            </dd>
            <dt>52주 최저</dt>
            <dd className="down">
              33,900,000
              <em>(2021.06.22)</em>
            </dd>
          </dl>
          <dl>
            <dt>전일종가</dt>
            <dd>51,842,000</dd>
            <dt>당일고가</dt>
            <dd className="up">
              51,952,000
              <em className="up">+0.21%</em>
            </dd>
            <dt>당일저가</dt>
            <dd className="down">
              50,476,000
              <em className="down">-2.63%</em>
            </dd>
          </dl>
        </Inner>
      )}
    </Block>
  );
}

export default TableRowA;
