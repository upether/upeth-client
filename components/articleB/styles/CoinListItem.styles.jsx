import styled from '@emotion/styled';

const setLineTop = (opening_price, high_price) => {
  let top = (((high_price - opening_price) / opening_price) * 100) / 2;

  if (top > 13.5) return 0;
  else return 13.5 - top;
};

const setLineHeight = (opening_price, high_price, low_price) => {
  let top = (((high_price - opening_price) / opening_price) * 100) / 2;
  let bottom = (((opening_price - low_price) / opening_price) * 100) / 2;
  if (top > 13.5) top = 13.5;
  if (bottom > 13.5) bottom = 13.5;
  return top + bottom;
};

const setBoxTop = (opening_price, trade_price, high_price, low_price) => {
  if (trade_price > opening_price) {
    let top = (((trade_price - opening_price) / opening_price) * 100) / 2;

    if (top > 13.5) return 0;
    else {
      if (top > 0.1) return 13.5 - top;
      else return 13.5 - 0.1;
    }
  } else if (trade_price < opening_price) {
    return 13.5;
  } else {
    return 13.5;
  }
};

const setBoxHeight = (opening_price, trade_price, high_price, low_price) => {
  if (trade_price > opening_price) {
    let top = (((trade_price - opening_price) / opening_price) * 100) / 2;

    if (top > 13.5) return 13.5;
    else {
      if (top > 0.1) return top;
      else return 0.1;
    }
  } else if (trade_price < opening_price) {
    let bottom = (((opening_price - trade_price) / opening_price) * 100) / 2;

    if (bottom > 13.5) return 13.5;
    else {
      if (bottom > 0.1) return bottom;
      else return 0.1;
    }
  } else {
    return 0.1;
  }
};

export const Block = styled.table`
  width: 100%;
  border-spacing: 0;
  color: ${(props) =>
    props.change === 'RISE'
      ? '#d60000 !important'
      : props.change === 'FALL'
      ? '#0051c7 !important'
      : ''};

  td {
    height: 44px;
    border-top: 1px solid #f1f1f4;
  }

  td:first-of-type {
    padding-left: 14px;
  }

  td:last-of-type {
    padding-right: 14px;
  }

  .up {
    color: #d60000 !important;
  }

  .down {
    color: #0051c7 !important;
  }

  .on {
    background-color: #f4f5f8;
  }

  :hover {
    background-color: #f4f5f8;
  }
`;

export const Bookmark = styled.span`
  display: block;
  width: 12px;
  height: 12px;

  & a {
    display: block;
    width: 12px;
    height: 12px;
    background: url(https://cdn.upbit.com/images/bg.e801517.png) -80px -50px
      no-repeat;
    overflow: hidden;
    text-indent: 999em;
  }
`;

export const Candle = styled.td`
  text-align: center;

  & div {
    position: relative;
    width: 7px;
    height: 27px;
    margin: 0 auto;
    overflow: hidden;
  }
`;

export const Line = styled.span`
  position: absolute;
  left: 3px;
  width: 1px;
  display: block;
  overflow: hidden;
  text-indent: -999em;
  background-color: ${(props) =>
    props.signed_change_price > 0
      ? '#c84a31'
      : props.signed_change_price < 0
      ? '#1261c4'
      : '#333'};

  top: ${(props) => setLineTop(props.opening_price, props.high_price) + 'px'};
  height: ${(props) =>
    setLineHeight(props.opening_price, props.high_price, props.low_price) +
    'px'};
`;

export const Box = styled.span`
  position: absolute;
  width: 7px;
  left: 0;
  display: block;
  overflow: hidden;
  text-indent: -999em;
  background-color: ${(props) =>
    props.signed_change_price > 0
      ? '#c84a31'
      : props.signed_change_price < 0
      ? '#1261c4'
      : '#333'};

  top: ${(props) =>
    setBoxTop(
      props.opening_price,
      props.trade_price,
      props.high_price,
      props.low_price
    ) + 'px'};
  height: ${(props) =>
    setBoxHeight(
      props.opening_price,
      props.trade_price,
      props.high_price,
      props.low_price
    ) + 'px'};
`;

export const Title = styled.td`
  text-align: left;

  & a {
    color: #2b2b2b;
  }

  & a:hover {
    text-decoration: underline;
  }

  & strong {
    word-break: break-all;
    display: block;
    margin: 2px 0 3px;
    line-height: 1em;
    font-weight: 700;
  }

  & em {
    display: block;
    color: #666;
    font-size: 11px;
    font-style: normal;
  }
`;

export const Price = styled.td`
  text-align: right;
  padding-right: 4px;
  vertical-align: top;

  & strong {
    display: block;
    padding-top: 7px;
  }
`;

export const Percent = styled.td`
  text-align: right;
  vertical-align: top;

  & {
    margin: 0;
    padding-top: 7px;
  }

  em {
    display: block;
    font-size: 11px;
    font-style: normal;
  }
`;

export const Volume = styled.td`
  vertical-align: top;
  text-align: right;

  & p {
    padding-top: 8px;
    color: #2b2b2b;
  }

  & i {
    font-size: 11px;
    color: #999;
  }
`;
