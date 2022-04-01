import { useQuery } from 'react-query';

const useTickerBookmark = (
  marketAllData,
  bookmarkData,
  headerOption,
  searchInput = ''
) => {
  const { status, data } = useQuery(['bookmarkData', bookmarkData], () =>
    fetch(`https://api.upbit.com/v1/ticker?markets=${bookmarkData}`).then(
      (res) => res.json()
    )
  );

  let totalData;
  let totalCoinData;

  if (
    (status === 'success' && !Object.keys(data).includes('error')) ||
    marketAllData
  ) {
    totalData = data?.map((el, i) => {
      const {
        market,
        change,
        opening_price,
        trade_price,
        change_rate,
        change_price,
        signed_change_price,
        signed_change_rate,
        acc_trade_price_24h,
        high_price,
        low_price,
      } = el;

      let korean_name;
      let english_name;
      let filteredData;

      if (marketAllData) {
        filteredData = marketAllData.filter((el) => el.market === market)[0];
      }

      if (filteredData) {
        const { korean_name: koreanName, english_name: englishName } =
          filteredData;
        korean_name = koreanName;
        english_name = englishName;
      }

      return {
        market,
        change,
        opening_price,
        trade_price,
        change_rate,
        change_price,
        signed_change_rate,
        signed_change_price,
        acc_trade_price_24h,
        high_price,
        low_price,
        korean_name,
        english_name,
      };
    });
  }

  // sort
  if (headerOption[0] === 1) {
    if (!!totalData && headerOption[1] === true) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => b.trade_price - a.trade_price);
    }

    if (!!totalData && headerOption[1] === false) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => a.trade_price - b.trade_price);
    }
  } else if (headerOption[0] === 2) {
    if (!!totalData && headerOption[1] === true) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => b.signed_change_rate - a.signed_change_rate);
    }

    if (!!totalData && headerOption[1] === false) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => a.signed_change_rate - b.signed_change_rate);
    }
  } else {
    if (!!totalData && headerOption[1] === true) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => b.acc_trade_price_24h - a.acc_trade_price_24h);
    }

    if (!!totalData && headerOption[1] === false) {
      totalCoinData = []
        .concat(totalData)
        .sort((a, b) => a.acc_trade_price_24h - b.acc_trade_price_24h);
    }
  }

  if (searchInput !== '') {
    totalCoinData = totalCoinData.filter((el) => {
      const [_, coinID] = el.market.split('-');

      return (
        el.korean_name.includes(searchInput) ||
        el.english_name.toLowerCase().includes(searchInput.toLowerCase()) ||
        coinID.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
  }

  return {
    totalCoinData,
  };
};

export default useTickerBookmark;
