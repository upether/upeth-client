import React from 'react';

import { Block } from './styles/DataItem.styles';

const DataItem = ({ data }) => {
  const [id] = data.market.split('-');

  return (
    <Block>
      <a>
        <label>{data.korean_name}</label>
        <p
          style={
            data.change === 'FALL'
              ? { color: '#1261C4' }
              : data.change === 'RISE'
              ? { color: '#C84A31' }
              : { color: '#333' }
          }
        >
          <span className='data__price'>
            {data.trade_price >= 1
              ? data.trade_price.toLocaleString('ko-KR')
              : data.trade_price}{' '}
            {id}
          </span>
          <span className='data__rate'>
            {(data.change === 'FALL'
              ? '-'
              : data.change === 'RISE'
              ? '+'
              : '') + (data.change_rate * 100).toFixed(2)}{' '}
            %
          </span>
        </p>
      </a>
    </Block>
  );
};

export default DataItem;
