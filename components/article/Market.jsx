import React from 'react';
import { Block, TypeFormA, TypeFormB, TypeFormC } from './Market.styles';

function Market() {
  return (
    <Block>
      <TypeFormA className="down">
        <span>
          <strong>52,850,000</strong>
          <em>KRW</em>
        </span>
        <span>
          <p>전일대비</p>
          <strong>-0.94%</strong>
          <strong>-500,000</strong>
        </span>
      </TypeFormA>
      {/* mini chart position */}
      <TypeFormB>mini chart</TypeFormB>
      <TypeFormC>
        <dl>
          <dt>고가</dt>
          <dd>
            <strong className="up">53,600,000</strong>
          </dd>
          <dt>저가</dt>
          <dd>
            <strong className="down">52,678,000</strong>
          </dd>
        </dl>
        <dl>
          <dt>거래량(24H)</dt>
          <dd>
            <strong>6,940.385</strong>
            &nbsp;
            <i>BTC</i>
          </dd>
          <dt>거래대금(24H)</dt>
          <dd>
            <strong>371,793,925,104</strong>
            &nbsp;
            <i>KRW</i>
          </dd>
        </dl>
      </TypeFormC>
    </Block>
  );
}

export default Market;
