import React, { useCallback } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react';
import { Block } from './styles/CoinListSubHeader.styles';

import useExchange from '../../hooks/useExchange';

// ConinListSubHeader에서 Image를 담당
const ImageComponent = observer(({ text }) => {
  const exchangeStore = useExchange();
  let source;

  // optionB가 보유가 아닐때, 보유일때
  if (exchangeStore.optionB !== '보유') {
    source =
      text === exchangeStore.subOptionB
        ? exchangeStore.subOptionBoolB
          ? 'https://cdn.upbit.com/images/ico_up_down_2.71770c7.png'
          : 'https://cdn.upbit.com/images/ico_up_down_1.d63eb3d.png'
        : 'https://cdn.upbit.com/images/ico_up_down.d050377.png';
  } else {
    source =
      text === exchangeStore.holdOption
        ? exchangeStore.holdOptionBool
          ? 'https://cdn.upbit.com/images/ico_up_down_2.71770c7.png'
          : 'https://cdn.upbit.com/images/ico_up_down_1.d63eb3d.png'
        : 'https://cdn.upbit.com/images/ico_up_down.d050377.png';
  }

  return <Image src={source} width='5px' height='10px' alt={text} />;
});

// ArticleB SubHeader를 담당 (ArticleB/CoinListTab/SubHeader)
const CoinListSubHeader = observer(() => {
  const exchangeStore = useExchange();

  // 한글명 클릭시 korName(전역상태) bool 수정
  // korName: true 한글, false 영어
  const clickKorName = useCallback((e) => {
    e.preventDefault();
    exchangeStore.setKorName(!exchangeStore.korName);
  }, []);

  // option 클릭시 subOptionB(전역상태), subOptionBoolB(전역상태) 수정
  // subOptionB: 현재가, 전일대비, 거래대금 (기준: optionB가 보유가 아닐때)
  // subOptionBoolB: true 내림차순 false 오름차순
  const clickOption = useCallback((e, text) => {
    e.preventDefault();
    if (text === exchangeStore.subOptionB) {
      exchangeStore.setSubOptionB(text);
      exchangeStore.setSubOptionBoolB(!exchangeStore.subOptionBoolB);
    } else {
      exchangeStore.setSubOptionB(text);
      exchangeStore.setSubOptionBoolB(true);
    }
  }, []);

  // option 클릭시 holdOption(전역상태), holdOptionBool(전역상태) 수정
  // holdOption: 코인명, 보유(평가금), 매수평균가, 수익률 (기준: optionB가 보유가 일때)
  // holdOptionBool: true 내림차순 false 오름차순
  const clickHoldOption = useCallback((e, text) => {
    e.preventDefault();
    if (text === exchangeStore.holdOption) {
      exchangeStore.setHoldOption(text);
      exchangeStore.setHoldOptionBool(!exchangeStore.holdOptionBool);
    } else {
      exchangeStore.setHoldOption(text);
      exchangeStore.setHoldOptionBool(true);
    }
  }, []);

  return (
    <Block>
      {exchangeStore.optionB !== '보유' ? (
        <>
          <colgroup>
            <col width='26' />
            <col width='26' />
            <col width='94' />
            <col width='88' />
            <col width='78' />
            <col width='*' />
          </colgroup>
          <thead>
            <tr>
              <th colSpan='3'>
                <a href='#' onClick={(e) => clickKorName(e)}>
                  {exchangeStore.korName ? '한글명' : '영문명'}
                  <Image
                    src='https://cdn.upbit.com/images/ico_change.c6ad0e9.png'
                    width='7px'
                    height='10px'
                    alt='lang'
                  />
                </a>
              </th>
              {['현재가', '전일대비', '거래대금'].map((text) => {
                return (
                  <th key={text}>
                    <a href='#' onClick={(e) => clickOption(e, text)}>
                      <div>
                        <span>{text}</span>
                        <ImageComponent text={text} />
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
            <col width='100' />
            <col width='120' />
            <col width='100' />
            <col width='*' />
          </colgroup>
          <thead>
            <tr>
              {['코인명', '보유(평가금)', '매수평균가', '수익률'].map(
                (text) => {
                  return (
                    <th key={text}>
                      <a href='#' onClick={(e) => clickHoldOption(e, text)}>
                        <div>
                          <span>{text}</span>
                          <ImageComponent text={text} />
                        </div>
                      </a>
                    </th>
                  );
                }
              )}
            </tr>
          </thead>
        </>
      )}
    </Block>
  );
});

export default CoinListSubHeader;
