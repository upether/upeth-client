import { makeAutoObservable } from 'mobx';

class ExchangeStore {
  marketID = 'KRW';
  symbolID = 'KRW-BTC';

  constructor() {
    makeAutoObservable(this);
  }

  setSymbolID(symbolID) {
    this.symbolID = symbolID;
  }
}

export default new ExchangeStore();
