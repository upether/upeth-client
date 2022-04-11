import { useQuery } from 'react-query';

// symbolID가 undefined일때 KRW-BTC로 초기화
const useForiegn = (symbolID = 'KRW-BTC') => {
  let queryStringSymbol;
  let binanceData;
  let huobiData;
  let krakenData;
  let basePrice;
  const foreignData = [];

  // symobolID로 queryStringSymbol 만들기
  if (symbolID) {
    const [pairID, coinID] = symbolID.split('-');
    if (pairID === 'KRW' || pairID === 'USDT') {
      queryStringSymbol = coinID + 'USDT';
    } else if (pairID === 'BTC') {
      queryStringSymbol = coinID + pairID;
    }
  }

  // 두나무 REST API를 통해 환율 데이터 가져오기
  const { status: rateStatus, data: rateData } = useQuery('rateData', () =>
    fetch(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
    ).then((res) => res.json())
  );
  // 거래소별로 REST API를 통해 해당 데이터 가져오기
  const { status: binanceStatus, data: binanceTickerData = {} } = useQuery(
    ['binanceTickerData', queryStringSymbol],
    () =>
      fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${queryStringSymbol}`
      ).then((res) => res.json())
  );
  const { status: huobiStatus, data: huobiTickerData = {} } = useQuery(
    ['huobiTickerData', queryStringSymbol],
    () =>
      fetch(
        `https://api.huobi.pro/market/detail/merged?symbol=${queryStringSymbol.toLowerCase()}`
      ).then((res) => res.json())
  );
  const { status: krakenStatus, data: krakenTickerData = {} } = useQuery(
    ['krakenTickerData', queryStringSymbol],
    () =>
      fetch(
        `https://api.kraken.com/0/public/Ticker?pair=${queryStringSymbol}`
      ).then((res) => res.json())
  );

  // REST API를 통해 가져온 데이터 가공하기
  if (rateStatus === 'success') {
    basePrice = rateData[0].basePrice;
  }
  if (binanceStatus === 'success') {
    const { lastPrice: price } = binanceTickerData;
    binanceData = { price: parseFloat(price) };
  }
  if (huobiStatus === 'success' && huobiTickerData.status === 'ok') {
    const {
      tick: { close: price },
    } = huobiTickerData;
    huobiData = { price };
  }
  if (krakenStatus === 'success' && krakenTickerData.error.length === 0) {
    const { result } = krakenTickerData;
    const symbol = Object.keys(result)[0];
    const { c } = result[symbol];
    krakenData = { price: parseFloat(c[0]) };
  }

  // 가공된 데이터를 foreginData에 넣어주기
  if (binanceData && basePrice) {
    foreignData.push({
      exchange: 'Binance',
      krwPrice: Math.floor(binanceData.price * basePrice).toLocaleString(
        'ko-KR'
      ),
      price: binanceData.price.toLocaleString('ko-KR'),
    });
  }
  if (huobiData && basePrice) {
    foreignData.push({
      exchange: 'Huobi',
      krwPrice: Math.floor(huobiData.price * basePrice).toLocaleString('ko-KR'),
      price: huobiData.price.toLocaleString('ko-KR'),
    });
  }
  if (krakenData && basePrice) {
    foreignData.push({
      exchange: 'Kraken',
      krwPrice: Math.floor(krakenData.price * basePrice).toLocaleString(
        'ko-KR'
      ),
      price: krakenData.price.toLocaleString('ko-KR'),
    });
  }

  return { foreignData };
};

export default useForiegn;
