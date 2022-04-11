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
  const { marketAllData = [] } = useMarketAll();
  const [tapOption, setTapOption] = useState('시세');
  const [pairID, setPairID] = useState('');
  const [coinID, setCoinID] = useState('');
  const [korName, setKorName] = useState('');
  // custom hook에서 빈배열로 초기화 할건지
  // 값 받아올때 undefined일때 빈배열로 초기화 할건지
  // 두개다 하는게 좋아보인다

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

  const clickTitle = useCallback((e) => {
    e.preventDefault();
  }, []);

  const clickOption = useCallback((e, option) => {
    e.preventDefault();
    setTapOption(option);
  }, []);

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
