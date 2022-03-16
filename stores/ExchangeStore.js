import { makeAutoObservable } from 'mobx';

class ExchangeStore {
  marketId = 'KRW';

  constructor() {
    makeAutoObservable(this);
  }

  setSymbol(symbol) {
    this.symbol = symbol;
  }
}

export default new ExchangeStore();
