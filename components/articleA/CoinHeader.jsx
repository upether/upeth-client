import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Block,
  Select,
  Arrow,
  InfoTab,
  TextReplace,
  Setting,
} from './styles/CoinTitle.styles';
import useMarketAll from '../../hooks/useMarketAll';

const CoinHeader = () => {
  const router = useRouter();
  // REST API(market/all) 가져오기 (목적은 korean_name을 가져오기)
  const { marketAllData = [] } = useMarketAll();
  const [tapOption, setTapOption] = useState('시세');
  const [pairID, setPairID] = useState('');
  const [coinID, setCoinID] = useState('');
  const [korName, setKorName] = useState('');

  // pairID, CoinID를 구하기 (방법은 query의 code를 보고 판단하기)
  // korName 구하기 (방법은 REST API로 가져온 데이터 필터링하기)
  useEffect(() => {
    if (router.query.code && marketAllData.length !== 0) {
      const [pair, coin] = router.query.code.split('-');
      const marketData = marketAllData.filter(
        (el) => el.market === router.query.code
      )[0];
      setPairID(pair);
      setCoinID(coin);
      setKorName(marketData.korean_name);
    }
  }, [router.query, marketAllData]);

  // Title 클릭시 핸들러
  const clickTitle = useCallback((e) => {
    e.preventDefault();
  }, []);

  // Option 클릭시 핸들러
  const clickOption = useCallback((e, option) => {
    e.preventDefault();
    setTapOption(option);
  }, []);

  // Setting 클릭시 핸들러
  const clickSetting = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Block>
      <Select href="#" onClick={(e) => clickTitle(e)}>
        {pairID !== '' && coinID !== '' && korName !== '' && (
          <>
            <em>
              <Image
                width="26px"
                height="26px"
                src={`https://static.upbit.com/logos/${coinID.toUpperCase()}.png`}
                alt={`https://static.upbit.com/logos/${coinID.toUpperCase()}.png`}
              />
            </em>
            <strong>{korName}</strong>
            <p>
              {coinID}/{pairID}
            </p>
          </>
        )}
      </Select>
      <Arrow href="#" onClick={(e) => clickTitle(e)}>
        Arrow
      </Arrow>
      <InfoTab>
        <dl>
          <TextReplace>시세, 정보 텝</TextReplace>
          <dd>
            <a
              className={tapOption === '시세' ? 'on' : ''}
              href="#"
              onClick={(e) => clickOption(e, '시세')}
            >
              시세
            </a>
          </dd>
          <dd>
            <a
              className={tapOption === '정보' ? 'on' : ''}
              href="#"
              onClick={(e) => clickOption(e, '정보')}
            >
              정보
            </a>
          </dd>
          <Setting>
            <a href="#" onClick={(e) => clickSetting(e)}>
              화면설정
            </a>
          </Setting>
        </dl>
      </InfoTab>
    </Block>
  );
};

export default CoinHeader;
