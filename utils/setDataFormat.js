export const setPriceFormat = (price) => {
  if (price >= 100) {
    return price.toLocaleString('ko-KR');
  } else if (price >= 1) {
    return price.toFixed(2);
  } else {
    return price.toFixed(4);
  }
};

export const setCoinListVolumeFormat = (volume) => {
  return Math.floor(volume / 1000000).toLocaleString('ko-KR');
};

// export const setVolumeFormat = (price, volume) => {
//   if (price >= 1) {
//     return volume
//       .toFixed(3)
//       .toString()
//       .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
//   } else {
//     return Math.floor()
//       .toString()
//       .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
//   }
// };

// export const setDateFormat = (date) => {
//   return date.replace(/-/g, '.');
// };
