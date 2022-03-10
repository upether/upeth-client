import React from 'react';
import { Block } from './TableA.styles';

import TableRowA from './TableRowA';
import TableRowB from './TableRowB';

function TableA() {
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
        {Array(15)
          .fill()
          .map((el, i) => (
            <TableRowA key={i} idx={i} />
          ))}
        {Array(15)
          .fill()
          .map((el, i) => (
            <TableRowB key={i} idx={i} />
          ))}
      </tbody>
    </Block>
  );
}

export default TableA;
