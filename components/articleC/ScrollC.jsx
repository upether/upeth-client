import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import TableC from './TableC';

const ScrollC = () => {
  return (
    <Scrollbars style={{ width: '100%', height: '694px' }} universal={true}>
      <TableC />
    </Scrollbars>
  );
};

export default ScrollC;
