import { makeAutoObservable } from 'mobx';

class ExchangeStore {
  symbolID = 'KRW-BTC';
  marketID = 'KRW';
  marketOption = 'KRW';
  korName = true;
  headerOption = [3, true];
  searchInput = '';

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

  setKorName(korName) {
    this.korName = korName;
  }

  setHeaderOption([idx, option]) {
    this.headerOption = [idx, option];
  }

  setSearchInput(searchInput) {
    this.searchInput = searchInput;
  }
}

export default new ExchangeStore();
