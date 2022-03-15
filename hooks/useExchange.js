import React, { useContext } from 'react';

import { ExchangeContext } from '../stores';

const useExchange = () => {
  const exchangeStore = useContext(ExchangeContext);
  return exchangeStore;
};

export default useExchange;
