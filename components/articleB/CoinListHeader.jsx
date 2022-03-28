import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Block } from './styles/CoinListHeader.styles';

import useExchange from '../../hooks/useExchange';

const Image = observer(({ idx }) => {
  const exchangeStore = useExchange();

  const source =
    exchangeStore.headerOption[0] === parseInt(idx)
      ? exchangeStore.headerOption[1]
        ? 'https://cdn.upbit.com/images/ico_up_down_2.71770c7.png'
        : 'https://cdn.upbit.com/images/ico_up_down_1.d63eb3d.png'
      : 'https://cdn.upbit.com/images/ico_up_down.d050377.png';

  return <img src={source} />;
});

const CoinListHeader = observer(() => {
  const exchangeStore = useExchange();

  const clickKorName = useCallback((e) => {
    e.preventDefault();
    exchangeStore.setKorName(!exchangeStore.korName);
  }, []);

  const selectHlOption = useCallback((e, idx) => {
    e.preventDefault();
    if (idx === exchangeStore.headerOption[0])
      exchangeStore.setHeaderOption([idx, !exchangeStore.headerOption[1]]);
    else exchangeStore.setHeaderOption([idx, true]);
  }, []);

  return (
    <Block>
      <colgroup>
        <col width="26" />
        <col width="26" />
        <col width="94" />
        <col width="88" />
        <col width="78" />
        <col width="*" />
      </colgroup>
      <thead>
        <tr>
          <th colSpan="3">
            <a href="#" onClick={(e) => clickKorName(e)}>
              {exchangeStore.korName ? '한글명' : '영문명'}
              <img src="https://cdn.upbit.com/images/ico_change.c6ad0e9.png" />
            </a>
          </th>
          <th>
            <a href="#" onClick={(e) => selectHlOption(e, 1)}>
              현재가
              <Image idx="1" />
            </a>
          </th>
          <th>
            <a href="#" onClick={(e) => selectHlOption(e, 2)}>
              전일대비
              <Image idx="2" />
            </a>
          </th>
          <th>
            <a href="#" onClick={(e) => selectHlOption(e, 3)}>
              거래대금
              <Image idx="3" />
            </a>
          </th>
        </tr>
      </thead>
    </Block>
  );
});

export default CoinListHeader;
