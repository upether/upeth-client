import { useState, useEffect } from 'react';

const useWebsocket = () => {
  const [wsInstance, setWsInstance] = useState(null);

  let ws;

  useEffect(() => {
    ws = new WebSocket('wss://api.upbit.com/websocket/v1');
    ws.binaryType = 'arraybuffer';

    ws.onopen = () => {
      const request = [
        { ticket: 'test' },
        { type: 'orderbook', codes: ['KRW-BTC'] },
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
  }, []);

  return { wsInstance };
};

export default useWebsocket;
