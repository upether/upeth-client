import React from 'react';
import useForiegn from '../../hooks/useForiegn';
import { Block } from './styles/CoinForeign.styles';

import useExchange from '../../hooks/useExchange';

const ForeignItem = ({ data }) => {
  const { exchange, krwPrice, price } = data;
  return (
    <li>
      <em>{exchange}</em>
      <strong>{krwPrice}</strong>
      <p>(${price})</p>
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
