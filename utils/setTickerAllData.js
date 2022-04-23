export const selectTickerAllData = (rawMarketData, pairID) => {
  const marketData = rawMarketData?.filter((el) => {
    const { market } = el;
    const [id] = market.split('-');
    if (id === pairID) return el;
  });
  const symbolData = marketData?.map((el) => el.market).join(',');

  return { marketData, symbolData };
};

export const combineTickerAllData = (tickerAllData, marketData) => {
  const combinedTickerAllData = tickerAllData?.map((el) => {
    const {
      market,
      change,
      opening_price,
      trade_price,
      change_rate,
      change_price,
      signed_change_price,
      signed_change_rate,
      acc_trade_price_24h,
      high_price,
      low_price,
    } = el;
    const filteredMarketData = marketData?.filter(
      (el) => el.market === market
    )[0];
    const { korean_name, english_name } = filteredMarketData;
    return {
      market,
      change,
      opening_price,
      trade_price,
      change_rate,
      change_price,
      signed_change_rate,
      signed_change_price,
      acc_trade_price_24h,
      high_price,
      low_price,
      korean_name,
      english_name,
    };
  });

  return { combinedTickerAllData };
};

export const sortTickerAllData = (tickerAllData, option, boolean) => {
  const sortedTickerAllData = tickerAllData?.sort((a, b) => {
    if (option === '현재가' && boolean === true) {
      return b.trade_price - a.trade_price;
    } else if (option === '현재가' && boolean === false) {
      return a.trade_price - b.trade_price;
    } else if (option === '전일대비' && boolean === true) {
      return b.signed_change_rate - a.signed_change_rate;
    } else if (option === '전일대비' && boolean === false) {
      return a.signed_change_rate - b.signed_change_rate;
    } else if (option === '거래대금' && boolean === true) {
      return b.acc_trade_price_24h - a.acc_trade_price_24h;
    } else if (option === '거래대금' && boolean === false) {
      return a.acc_trade_price_24h - b.acc_trade_price_24h;
    }
  });

  return { sortedTickerAllData };
};

export const filterTickerAllData = (tickerAllData, searchInput) => {
  const filteredTickerAllData = tickerAllData?.filter((el) => {
    const [_, id] = el.market.split('-');
    return (
      el.korean_name.includes(searchInput) ||
      el.english_name.toLowerCase().includes(searchInput.toLowerCase()) ||
      id.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  return { filteredTickerAllData };
};
