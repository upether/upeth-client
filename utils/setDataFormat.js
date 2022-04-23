// price Format 정해주기
export const setPriceFormat = (price) => {
  if (price >= 100) {
    return price.toLocaleString('ko-KR');
  } else if (price >= 1) {
    return price.toFixed(2);
  } else {
    return price.toFixed(4);
  }
};

// volume Format 정해주기
export const setVolumeFormat = (price, volume, decimal = true) => {
  if (price >= 1 && decimal) {
    return volume
      .toFixed(3)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return Math.floor(volume)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }
};

// date Format 정해주기
export const setDateFormat = (date) => {
  return date.replace(/-/g, '.');
};

// percent 정해주기 (추가 예정)

// volume Format 정해주기 (CoinList) (삭제예정)
export const setCoinListVolumeFormat = (volume) => {
  return Math.floor(volume / 1000000).toLocaleString('ko-KR');
};
