import { useState, useEffect } from 'react';

// WebSocket Ticker All 데이터 가져오기
// 사용되는 곳:
const useTickerAllWebSocket = (allSymbolID) => {
  const [wsInstance, setWsInstance] = useState([]);

  let ws;
  let buffer = [];

  useEffect(() => {
    const loop = setInterval(() => {
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
        { type: 'ticker', codes: allSymbolID },
      ];
      ws.send(JSON.stringify(request));
    };

    ws.onmessage = (e) => {
      const enc = new TextDecoder('utf-8');
      const arr = new Uint8Array(e.data);
      const data = JSON.parse(enc.decode(arr));
      buffer.unshift(data);
    };

    ws.onclose = () => {
      console.log('tickerAll closing');
    };

    return () => {
      ws.close();
    };
  }, [allSymbolID]);

  return { wsInstance };
};

export default useTickerAllWebSocket;
