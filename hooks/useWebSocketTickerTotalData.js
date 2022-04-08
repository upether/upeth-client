const useWebSocketTickerTotalData = (totalCoinData, wsInstance, data = []) => {
  const unique = wsInstance.filter((el, i) => {
    return (
      wsInstance.findIndex((el2) => {
        return el.code === el2.code;
      }) === i
    );
  });

  // acc_ask_volume: 1642454490.8467004;
  // acc_bid_volume: 1712077280.9316123;
  // acc_trade_price: 549928023259.0325;
  // acc_trade_price_24h: 592586851290.2322;
  // acc_trade_volume: 3354531771.7783127;
  // acc_trade_volume_24h: 3627885779.4211173;
  // ask_bid: 'BID';
  // change: 'RISE';
  // change_price: 12;
  // change_rate: 0.0769230769;
  // code: 'KRW-ZIL';
  // delisting_date: null;
  // high_price: 177;
  // highest_52_week_date: '2021-04-17';
  // highest_52_week_price: 326;
  // is_trading_suspended: false;
  // low_price: 153;
  // lowest_52_week_date: '2022-02-24';
  // lowest_52_week_price: 41.4;
  // market_state: 'ACTIVE';
  // market_warning: 'NONE';
  // opening_price: 155;
  // prev_closing_price: 156;
  // signed_change_price: 12;
  // signed_change_rate: 0.0769230769;
  // stream_type: 'REALTIME';
  // timestamp: 1649264758573;
  // trade_date: '20220406';
  // trade_price: 168;
  // trade_time: '170558';
  // trade_timestamp: 1649264758000;
  // trade_volume: 3555.01415958;
  // type: 'ticker';

  let uniqueData;
  let tickerTotalData;

  if (data.length === 0) {
    if (unique.length !== 0) {
      uniqueData = unique.map((el) => {
        const {
          acc_trade_price_24h,
          change,
          change_price,
          change_rate,
          high_price,
          low_price,
          code: market,
          opening_price,
          signed_change_price,
          signed_change_rate,
          trade_price,
        } = el;
        // english_name
        return {
          market,
          opening_price,
          high_price,
          low_price,
          trade_price,
          change,
          change_price,
          change_rate,
          signed_change_price,
          signed_change_rate,
          acc_trade_price_24h,
        };
      });

      tickerTotalData = totalCoinData.map((el) => {
        let filtered = uniqueData.filter((el2) => el2.market === el.market);
        if (filtered.length !== 0) {
          filtered[0].english_name = el.english_name;
          filtered[0].korean_name = el.korean_name;
          if (filtered[0].trade_price !== el.trade_price) {
            console.log(filtered[0]);
          }
          if (filtered[0].trade_price > el.trade_price) {
            filtered[0].highlight = 'up';
          } else if (filtered[0].trade_price < el.trade_price) {
            filtered[0].highlight = 'down';
          } else {
            filtered[0].highlight = '';
          }
          return filtered[0];
        } else {
          return el;
        }
      });
    }
  } else {
    if (unique.length !== 0) {
      uniqueData = unique.map((el) => {
        const {
          acc_trade_price_24h,
          change,
          change_price,
          change_rate,
          high_price,
          low_price,
          code: market,
          opening_price,
          signed_change_price,
          signed_change_rate,
          trade_price,
        } = el;
        // english_name
        return {
          market,
          opening_price,
          high_price,
          low_price,
          trade_price,
          change,
          change_price,
          change_rate,
          signed_change_price,
          signed_change_rate,
          acc_trade_price_24h,
        };
      });

      tickerTotalData = data.map((el) => {
        let filtered = uniqueData.filter((el2) => el2.market === el.market);
        if (filtered.length !== 0) {
          filtered[0].english_name = el.english_name;
          filtered[0].korean_name = el.korean_name;
          if (filtered[0].trade_price !== el.trade_price) {
            console.log(filtered[0]);
          }
          if (filtered[0].trade_price > el.trade_price) {
            filtered[0].highlight = 'up';
          } else if (filtered[0].trade_price < el.trade_price) {
            filtered[0].highlight = 'down';
          } else {
            filtered[0].highlight = '';
          }
          return filtered[0];
        } else {
          return el;
        }
      });
    }
  }

  // acc_trade_price_24h: 737404114636.6044;
  // change: 'FALL';
  // change_price: 31;
  // change_rate: 0.1462264151;
  // english_name: 'Dogecoin';
  // high_price: 216;
  // korean_name: '도지코인';
  // low_price: 181;
  // market: 'KRW-DOGE';
  // opening_price: 213;
  // signed_change_price: -31;
  // signed_change_rate: -0.1462264151;
  // trade_price: 181;

  return { tickerTotalData };
};

export default useWebSocketTickerTotalData;
