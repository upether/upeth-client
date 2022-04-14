import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Block } from './styles/CoinListHeader.styles';

import useExchange from '../../hooks/useExchange';

// ArticleB Header를 담당 (ArticleB/CoinListTab/CoinListHeader)
const CoinListHeader = observer(() => {
  const exchangeStore = useExchange();

  // option 클릭시 optionB(Global 상태), pairID(Global 상태) 수정
  const clickOption = useCallback((option) => {
    if (option === 'KRW' || option === 'BTC' || option === 'USDT') {
      exchangeStore.setPairID(option);
    }
    exchangeStore.setOptionB(option);
  }, []);

  return (
    <Block>
      <ul>
        <li>
          <a
            className={exchangeStore.optionB === 'KRW' ? 'on' : ''}
            href='#'
            onClick={() => clickOption('KRW')}
          >
            원화
          </a>
        </li>
        <li>
          <a
            className={exchangeStore.optionB === 'BTC' ? 'on' : ''}
            href='#'
            onClick={() => clickOption('BTC')}
          >
            BTC
          </a>
        </li>
        <li>
          <a
            className={exchangeStore.optionB === 'USDT' ? 'on' : ''}
            href='#'
            onClick={() => clickOption('USDT')}
          >
            USDT
          </a>
        </li>
        <li>
          <a
            className={exchangeStore.optionB === '보유' ? 'on' : ''}
            href='#'
            onClick={() => clickOption('보유')}
          >
            보유
          </a>
        </li>
        <li>
          <a
            className={exchangeStore.optionB === '관심' ? 'on' : ''}
            href='#'
            onClick={() => clickOption('관심')}
          >
            관심
          </a>
        </li>
      </ul>
    </Block>
  );
});

export default CoinListHeader;
