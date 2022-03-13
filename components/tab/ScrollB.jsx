import React from 'react';
import { useQuery } from 'react-query';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block } from './ScrollB.styles';

import TableB from '../table/TableB';
function ScrollB() {
  const { isLoading, error, data } = useQuery('marketData', () =>
    fetch('https://api.upbit.com/v1/market/all').then((res) => res.json())
  );

  let marketData;

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  marketData = data.filter((el) => {
    let [a, b] = el.market.split('-');
    if (a === 'KRW') return el;
  });

  console.log('scrollB');
  console.log('data');
  console.log(data);
  console.log('marketData');
  console.log(marketData);

  return (
    <Block>
      <Scrollbars style={{ width: '100%', height: '770px' }}>
        {/* {Array(20)
        .fill()
        .map((el, i) => (
          <TableB key={i} />
        ))} */}
        {marketData.map((el, i) => (
          <TableB key={i} name={el.korean_name} market={el.market} />
        ))}
      </Scrollbars>
    </Block>
  );
}

export default ScrollB;
