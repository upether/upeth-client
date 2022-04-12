import { useState, useEffect } from 'react';

// WebSocket Orderbook 데이터 가져오기
// 사용하는 곳 OrderbookPrice
const useWebSocketOrderbook = (symbolID) => {
  const [wsInstance, setWsInstance] = useState(null);

  let ws;

  useEffect(() => {
    ws = new WebSocket('wss://api.upbit.com/websocket/v1');
    ws.binaryType = 'arraybuffer';

    ws.onopen = () => {
      const request = [
        { ticket: 'orderbook' },
        { type: 'orderbook', codes: [`${symbolID}`] },
      ];
      ws.send(JSON.stringify(request));
    };

    ws.onmessage = (e) => {
      const enc = new TextDecoder('utf-8');
      const arr = new Uint8Array(e.data);
      setWsInstance(JSON.parse(enc.decode(arr)));
    };

    ws.onclose = () => {
      console.log('orderbook closing');
    };

    return () => {
      ws.close();
    };
  }, [symbolID]);

  return { wsInstance };
};

export default useWebSocketOrderbook;
