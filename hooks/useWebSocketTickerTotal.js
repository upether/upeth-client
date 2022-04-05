import { useState, useEffect } from 'react';

const useWebSocketTickerTotal = (totalSymbolID) => {
  const [wsInstance, setWsInstance] = useState(null);

  let ws;
  let buffer = [];

  useEffect(() => {
    const loop = setInterval(() => {
      console.log('buffer', buffer);
      setWsInstance(buffer);
      buffer = [];
    }, 1000);

    return () => {
      clearInterval(loop);
    };
  }, []);

  useEffect(() => {
    ws = new WebSocket('wss://api.upbit.com/websocket/v1');
    ws.binaryType = 'arraybuffer';

    ws.onopen = () => {
      const request = [
        { ticket: 'tickerAll' },
        // { type: 'ticker', codes: [`${totalSymbolID}`] },
        {
          type: 'ticker',
          codes: [
            'KRW-BTC',
            'KRW-ETH',
            'KRW-NEO',
            'KRW-MTL',
            'KRW-LTC',
            'KRW-XRP',
            'KRW-ETC',
            'KRW-OMG',
            'KRW-SNT',
            'KRW-WAVES',
            'KRW-XEM',
            'KRW-QTUM',
            'KRW-LSK',
            'KRW-STEEM',
            'KRW-XLM',
            'KRW-ARDR',
            'KRW-ARK',
            'KRW-STORJ',
            'KRW-GRS',
            'KRW-REP',
            'KRW-ADA',
            'KRW-SBD',
            'KRW-POWR',
            'KRW-BTG',
            'KRW-ICX',
            'KRW-EOS',
            'KRW-TRX',
            'KRW-SC',
            'KRW-ONT',
            'KRW-ZIL',
            'KRW-POLY',
            'KRW-ZRX',
            'KRW-LOOM',
            'KRW-BCH',
            'KRW-BAT',
            'KRW-IOST',
            'KRW-RFR',
            'KRW-CVC',
            'KRW-IQ',
            'KRW-IOTA',
            'KRW-MFT',
            'KRW-ONG',
            'KRW-GAS',
            'KRW-UPP',
            'KRW-ELF',
            'KRW-KNC',
            'KRW-BSV',
            'KRW-THETA',
            'KRW-QKC',
            'KRW-BTT',
            'KRW-MOC',
            'KRW-ENJ',
            'KRW-TFUEL',
            'KRW-MANA',
            'KRW-ANKR',
            'KRW-AERGO',
            'KRW-ATOM',
            'KRW-TT',
            'KRW-CRE',
            'KRW-MBL',
            'KRW-WAXP',
            'KRW-HBAR',
            'KRW-MED',
            'KRW-MLK',
            'KRW-STPT',
            'KRW-ORBS',
            'KRW-VET',
            'KRW-CHZ',
            'KRW-STMX',
            'KRW-DKA',
            'KRW-HIVE',
            'KRW-KAVA',
            'KRW-AHT',
            'KRW-LINK',
            'KRW-XTZ',
            'KRW-BORA',
            'KRW-JST',
            'KRW-CRO',
            'KRW-TON',
            'KRW-SXP',
            'KRW-HUNT',
            'KRW-PLA',
            'KRW-DOT',
            'KRW-SRM',
            'KRW-MVL',
            'KRW-STRAX',
            'KRW-AQT',
            'KRW-GLM',
            'KRW-SSX',
            'KRW-META',
            'KRW-FCT2',
            'KRW-CBK',
            'KRW-SAND',
            'KRW-HUM',
            'KRW-DOGE',
            'KRW-STRK',
            'KRW-PUNDIX',
            'KRW-FLOW',
            'KRW-DAWN',
            'KRW-AXS',
          ],
        },
      ];
      ws.send(JSON.stringify(request));
    };

    ws.onmessage = (e) => {
      const enc = new TextDecoder('utf-8');
      const arr = new Uint8Array(e.data);
      const data = JSON.parse(enc.decode(arr));
      buffer.push(data);
    };

    ws.onclose = () => {
      console.log('tickerAll closing');
    };

    return () => {
      ws.close();
    };
  }, [totalSymbolID]);

  return { wsInstance };
};

export default useWebSocketTickerTotal;
