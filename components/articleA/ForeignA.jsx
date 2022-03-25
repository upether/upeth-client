import React from 'react';
import { Block } from './styles/ForeignA.styles';

const ForeignA = () => {
  return (
    <Block>
      <ul>
        <li>
          <em>Bitfinex</em>
          <strong>52,348,716</strong>
          <p>($43,534.33)</p>
        </li>
        <li>
          <em>Kraken</em>
          <strong>52,301,399</strong>
          <p>($43,511.50)</p>
        </li>
        <li>
          <em>Liquid</em>
          <strong>52,361,614</strong>
          <p>(¥5,038,615.00)</p>
        </li>
      </ul>
    </Block>
  );
};

export default ForeignA;
