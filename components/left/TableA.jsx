import React from 'react';
import { Block } from './TableA.styles';

import TableRowA from './TableRowA';
import TableRowB from './TableRowB';
import useExchange from '../../hooks/useExchange';
import useOrderbook from '../../hooks/useOrderbook';

function TableA() {
  const exchangeStore = useExchange();
  const { askData, bidData } = useOrderbook();

  console.log(askData, bidData);

  return (
    <Block>
      <colgroup>
        <col width="42" />
        <col width="120" />
        <col width="*" />
        <col width="120" />
        <col width="42" />
      </colgroup>
      <tbody>
        {/* {Array(15)
          .fill()
          .map((el, i) => (
            <TableRowA key={i} idx={i} />
          ))} */}
        {/* {Array(15)
          .fill()
          .map((el, i) => (
            <TableRowB key={i} idx={i} />
          ))} */}
        {askData?.map((el, i) => (
          <TableRowA key={i} idx={i} data={el} />
        ))}
        {bidData?.map((el, i) => (
          <TableRowB key={i} idx={i} data={el} />
        ))}
      </tbody>
    </Block>
  );
}

export default TableA;
