// Orderbook AskData 가공하기
// 사용하는 곳 OrderbookAsk
const useOrderbookAskData = (data, prev_closing_price, total) => {
  let changePrice;
  let changeRate;
  let sizeRate;

  if (Object.keys(data).lenght !== 0 && prev_closing_price) {
    changePrice = data.ask_price - prev_closing_price;

    if (changePrice > 0) {
      changeRate = '+' + ((changePrice / prev_closing_price) * 100).toFixed(2);
    } else {
      changeRate = ((changePrice / prev_closing_price) * 100).toFixed(2);
    }

    sizeRate = (data.ask_size / total) * 100 * 5;
  }

  return { changePrice, changeRate, sizeRate };
};

export default useOrderbookAskData;
