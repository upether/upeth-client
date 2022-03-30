import React from 'react';
import useForiegn from '../../hooks/useForiegn';
import { Block } from './styles/CoinForeign.styles';

import useExchange from '../../hooks/useExchange';

const ForeignItem = ({ data }) => {
  const { exchange, price } = data;
  return (
    <li>
      <em>{exchange}</em>
      <strong>52,348,716</strong>
      <p>(${price})</p>
      {/* <em>Bitfinex</em>
      <strong>52,348,716</strong>
      <p>($43,534.33)</p> */}
    </li>
  );
};

const CoinForeign = () => {
  const exchangeStore = useExchange();
  const { foreignData = [] } = useForiegn(exchangeStore.symbolID);

  return (
    <Block>
      <ul>
        {foreignData.map((el, i) => (
          <ForeignItem key={i} data={el} />
        ))}
      </ul>
    </Block>
  );
};

export default CoinForeign;
