import { useState, useEffect } from 'react';

import useMarketQuery from '../../../hooks/query/useMarketQuery';

const useMarketAll = (pairID) => {
  const [marketData, setMarketData] = useState([]);
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
      const tempSymbolData = tempMarketData?.map((el) => el.market).join(',');
      setMarketData(tempMarketData);
      setSymbolData(tempSymbolData);
    }
  }, [rawMarketData, pairID]);

  return { marketData, symbolData };
};

export default useMarketAll;
