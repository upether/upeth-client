import { useQuery } from 'react-query';

const useForiegn = (symbolID) => {
  // Error: cors error
  // const { data: bitfinexData } = useQuery('bitfinexData', () =>
  //   fetch(`https://api-pub.bitfinex.com/v2/ticker/tBTCUSD`).then((res) =>
  //     res.json()
  //   )
  // );

  const [pairID, coinID] = symbolID.split('-');
  let queryStringSymbol;
  if (pairID === 'KRW' || pairID === 'USDT') {
    queryStringSymbol = coinID + 'USDT';
  } else if (pairID === 'BTC') {
    queryStringSymbol = coinID + pairID;
  }

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
  const { status: rateStatus, data: rateData } = useQuery('rateData', () =>
    fetch(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
    ).then((res) => res.json())
  );

  let binanceData;
  let huobiData;
  let krakenData;
  let basePrice;
  const foreignData = [];

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

  if (binanceData && basePrice) {
    foreignData.push({
      exchange: 'Binance',
      krwPrice: Math.floor(binanceData.price * basePrice).toLocaleString(
        'ko-KR'
      ),
      price: binanceData.price.toLocaleString('ko-KR'),
    });
    console.log(basePrice);
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
