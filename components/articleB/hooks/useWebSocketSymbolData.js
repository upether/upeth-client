import { useState, useEffect } from 'react';

import useMarketQuery from '../../../hooks/query/useMarketQuery';

const useWebsocketSymbolData = (pairID) => {
  const [symbolData, setSymbolData] = useState();

  const { marketData: rawMarketData } = useMarketQuery();

  useEffect(() => {
    // marketData, symoblData 가공하기
    if (rawMarketData.length !== 0) {
      const tempMarketData = rawMarketData?.filter((el) => {
        const { market } = el;
        const [id] = market.split('-');
        if (id === pairID) return el;
      });
      const tempSymbolData = tempMarketData?.map((el) => el.market);
      // .join(',');
      setSymbolData(tempSymbolData);
    }
  }, [rawMarketData, pairID]);

  return { symbolData };
};

export default useWebsocketSymbolData;
