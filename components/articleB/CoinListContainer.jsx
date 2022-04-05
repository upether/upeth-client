import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block } from './styles/CoinListContainer.styles';

import CoinListItem from './CoinListItem';
import CoinListEmptyText from './CoinListEmptyText';
import useExchange from '../../hooks/useExchange';
import useMarket from '../../hooks/useMarket';
import useTickerTotal from '../../hooks/useTickerTotal';
import useMarketAll from '../../hooks/useMarketAll';
import useTickerBookmark from '../../hooks/useTickerBookmark';

import useWebSocketTickerTotal from '../../hooks/useWebSocketTickerTotal';

const CoinListContainer = observer(() => {
  const exchangeStore = useExchange();

  const { marketData, totalSymobolData } = useMarket(exchangeStore.marketID);
  const { totalCoinData } = useTickerTotal(
    marketData,
    totalSymobolData,
    exchangeStore.headerOption,
    exchangeStore.searchInput
  );

  const { wsInstance } = useWebSocketTickerTotal();
  console.log('wsInstance', wsInstance);

  const setBookmark = useCallback((market) => {
    const bookmark = localStorage.getItem('bookmark');
    if (bookmark) {
      const parseBookmark = JSON.parse(bookmark);
      if (!parseBookmark.includes(market)) {
        localStorage.setItem(
          'bookmark',
          JSON.stringify([...parseBookmark, market])
        );
      } else {
        localStorage.setItem(
          'bookmark',
          JSON.stringify(parseBookmark.filter((el) => el !== market))
        );
      }
    } else {
      localStorage.setItem('bookmark', JSON.stringify([market]));
    }
  }, []);

  let bookmarkData;

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('bookmark') === null) {
      localStorage.setItem('bookmark', '[]');
    } else {
      const { marketAllData } = useMarketAll();
      const { totalCoinData: bookmark } = useTickerBookmark(
        marketAllData,
        JSON.parse(localStorage.getItem('bookmark')).join(),
        exchangeStore.headerOption,
        exchangeStore.searchInput
      );
      bookmarkData = bookmark;
    }
  }

  // totalCoinData
  // market: KRW-BTC
  // change: 'RISE', 'FALL', 'EVEN'
  // korean_name: 비트코인, english_name: Bitcoin
  // 현재가 - trade_price
  // 전일대비 퍼센트 - change_rate
  // 전일대비 가격차 - change_price
  // 거래대금 - acc_trade_price_24h
  // 캔들 - high_price, low_price

  return (
    <Block>
      <Scrollbars style={{ width: '100%', height: '770px' }} universal={true}>
        {exchangeStore.marketOption !== '보유' &&
        exchangeStore.marketOption !== '관심' ? (
          totalCoinData?.map((el, i) => (
            <CoinListItem key={i} coinData={el} setBookmark={setBookmark} />
          ))
        ) : exchangeStore.marketOption === '보유' ? (
          <CoinListEmptyText />
        ) : (
          bookmarkData?.map((el, i) => (
            <CoinListItem key={i} coinData={el} setBookmark={setBookmark} />
          ))
        )}
      </Scrollbars>
    </Block>
  );
});

export default CoinListContainer;
