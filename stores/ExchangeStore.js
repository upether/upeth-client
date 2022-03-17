import { makeAutoObservable } from 'mobx';

class ExchangeStore {
  marketID = 'KRW';
  symbolID = 'KRW-BTC';
  marketOption = 'KRW';

  constructor() {
    makeAutoObservable(this);
  }

  setMarketID(marketID) {
    this.marketID = marketID;
  }

  setSymbolID(symbolID) {
    this.symbolID = symbolID;
  }

  setMarketOption(marketOption) {
    this.marketOption = marketOption;
  }
}

export default new ExchangeStore();
