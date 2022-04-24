import { makeAutoObservable } from 'mobx';

class ExchangeStore {
  symbolID = 'KRW-BTC';
  marketID = 'KRW';
  marketOption = 'KRW';
  headerOption = [3, true];
  // articleB
  searchInput = '';
  pairID = 'KRW';
  optionB = 'KRW';
  korName = true;
  subOptionB = '거래대금';
  subOptionBoolB = true;
  holdOption = '보유(평가금)';
  holdOptionBool = true;

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

  setHeaderOption([idx, option]) {
    this.headerOption = [idx, option];
  }

  // articleA

  // articleB
  // articleB/CoinListSearch
  setSearchInput(searchInput) {
    this.searchInput = searchInput;
  }

  // articleB/CoinListHeader
  setOptionB(optionB) {
    this.optionB = optionB;
  }

  setPairID(pairID) {
    this.pairID = pairID;
  }

  // articleB/CoinListSubHeader
  setKorName(korName) {
    this.korName = korName;
  }

  setSubOptionB(subOptionB) {
    this.subOptionB = subOptionB;
  }

  setSubOptionBoolB(subOptionBoolB) {
    this.subOptionBoolB = subOptionBoolB;
  }

  setHoldOption(holdOption) {
    this.holdOption = holdOption;
  }

  setHoldOptionBool(holdOptionBool) {
    this.holdOptionBool = holdOptionBool;
  }

  // articleC

  // aritcleD
}

export default new ExchangeStore();
