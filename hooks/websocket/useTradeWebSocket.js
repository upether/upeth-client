import { useState, useEffect } from 'react';

// WebSocket Trade 데이터 가져오기
// 사용되는 곳:
const useTradeWebSocket = (symbolID) => {
  const [wsInstance, setWsInstance] = useState(null);

  let ws;

  useEffect(() => {
    ws = new WebSocket('wss://api.upbit.com/websocket/v1');
    ws.binaryType = 'arraybuffer';

    ws.onopen = () => {
      const request = [
        { ticket: 'trade' },
        { type: 'trade', codes: [`${symbolID}`] },
      ];
      ws.send(JSON.stringify(request));
    };

    ws.onmessage = (e) => {
      const enc = new TextDecoder('utf-8');
      const arr = new Uint8Array(e.data);
      setWsInstance(JSON.parse(enc.decode(arr)));
    };

    ws.onclose = () => {
      console.log('trade closing');
    };

    return () => {
      ws.close();
    };
  }, [symbolID]);

  return { wsInstance };
};

export default useTradeWebSocket;
