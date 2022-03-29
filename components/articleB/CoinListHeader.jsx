import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Block } from './styles/CoinListHeader.styles';
import Image from 'next/image';

import useExchange from '../../hooks/useExchange';

const ImageComponent = React.memo(function ImageComponent({
  idx,
  // 보유 Tab을 위해 임시로
  hlOption = 0,
  alt,
}) {
  const source =
    hlOption[0] === parseInt(idx)
      ? hlOption[1]
        ? 'https://cdn.upbit.com/images/ico_up_down_2.71770c7.png'
        : 'https://cdn.upbit.com/images/ico_up_down_1.d63eb3d.png'
      : 'https://cdn.upbit.com/images/ico_up_down.d050377.png';
  return <Image src={source} width="5px" height="10px" alt={alt} />;
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
      {exchangeStore.marketOption !== '보유' ? (
        <>
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
                  <Image
                    src="https://cdn.upbit.com/images/ico_change.c6ad0e9.png"
                    width="7px"
                    height="10px"
                    alt="btc"
                  />
                </a>
              </th>
              {['현재가', '전일대비', '거래대금'].map((text, idx) => {
                return (
                  <th key={idx}>
                    <a href="#" onClick={() => selectHlOption(idx)}>
                      <div>
                        <span>{text}</span>
                        <ImageComponent
                          idx={idx}
                          hlOption={exchangeStore.headerOption}
                          alt={text}
                        />
                      </div>
                    </a>
                  </th>
                );
              })}
            </tr>
          </thead>
        </>
      ) : (
        <>
          <colgroup>
            <col width="100" />
            <col width="120" />
            <col width="100" />
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              {['코인명', '보유(평가금)', '매수평균가', '수익률'].map(
                (text, idx) => {
                  return (
                    <th key={idx}>
                      <a href="#" onClick={() => selectHlOption(idx)}>
                        <div>
                          <span>{text}</span>
                          <ImageComponent idx={idx} alt={text} />
                        </div>
                      </a>
                    </th>
                  );
                }
              )}
              {/* <th>
                <a href="#">
                  코인명
                  <ImageComponent />
                </a>
              </th>
              <th>
                <a href="#">
                  보유(평가금)
                  <ImageComponent />
                </a>
              </th>
              <th>
                <a href="#">
                  매수평균가
                  <ImageComponent />
                </a>
              </th>
              <th>
                <a href="#">
                  수익률
                  <ImageComponent />
                </a>
              </th> */}
            </tr>
          </thead>
        </>
      )}
    </Block>
  );
});

export default CoinListHeader;
