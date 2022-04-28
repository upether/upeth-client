import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import PageTemplate from '../../components/base/PageTemplate';
import SectionA from '../../components/section/SectionA';
import SectionB from '../../components/section/SectionB';
import useMarketQuery from '../../hooks/query/useMarketQuery';

function Exchange() {
  const router = useRouter();
  const [isError, setIsError] = useState(true);
  const { marketData } = useMarketQuery();

  useEffect(() => {
    if (router && marketData) {
      const filtered = marketData.filter(
        (el) => el.market === router.query.code
      );
      if (filtered.length !== 0) {
        setIsError(false);
      }
    } else {
      setIsError(true);
    }
  }, [router, marketData]);

  return (
    <PageTemplate>
      {isError ? (
        <></>
      ) : (
        <>
          <SectionA />
          <SectionB />
        </>
      )}
    </PageTemplate>
  );
}

export default Exchange;
