import React from 'react';
import { useRouter } from 'next/router';
import { Block } from './styles/CoinForeign.styles';

import useForiegn from '../../hooks/useForiegn';

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

// ArticleA 해외거래소별 코인가격들을 담당 (ArticleA/CoinContainer/CoinForeign)
const CoinForeign = () => {
  const router = useRouter();
  // 가공된 해외 거래소 데이터 가져오기
  const { foreignData = [] } = useForiegn(router.query.code);

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
