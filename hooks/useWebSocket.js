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
        { type: 'trade', codes: ['KRW-BTC'] },
      ];
      ws.send(JSON.stringify(request));
    };

    ws.onmessage = (e) => {
      var enc = new TextDecoder('utf-8');
      var arr = new Uint8Array(e.data);
      setWsInstance(JSON.parse(enc.decode(arr)));
    };

    ws.onclose = () => {
      console.log('closing');
    };

    return () => {
      ws.close();
    };
  }, []);

  return { wsInstance };
};

export default useWebsocket;
