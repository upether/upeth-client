import { makeAutoObservable } from 'mobx';

class ExchangeStore {
  symbol = 'KRW-BTC';

  constructor() {
    makeAutoObservable(this);
  }

  setSymbol(symbol) {
    this.symbol = symbol;
  }
}

export default new ExchangeStore();
