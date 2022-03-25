import styled from '@emotion/styled';

export const Block = styled.div`
  display: block;
  padding: 14px;

  & > div {
    position: relative;
    height: 404px;
  }

  & > div > dl {
    float: left;
    width: 100%;
  }

  & > div > dl > dt {
    float: left;
    width: 134px;
  }

  & > div > dl > dt > strong {
    color: #666;
    font-size: 13px;
  }

  & > div > dl > dt > i {
    color: #666;
    font-size: 11px;
  }

  & > div > dl > dd {
    float: right;
    width: 328px;
    height: 38px;
  }

  .checkOption {
    height: 30px;
    line-height: 30px;
  }

  .price {
    height: 53px;
    line-height: 53px;
  }

  .marginA {
    height: 38px;
    margin-bottom: 10px;
    line-height: 38px;
  }

  .marginB {
    height: 38px;
    margin-bottom: 6px;
    line-height: 38px;
  }

  .quantity {
    width: 100%;
    text-align: right;
  }

  .marginC {
    height: 38px;
    margin-bottom: 6px;
    line-height: 38px;
  }
`;

export const CheckOptionBlock = styled.dd`
  & span {
    display: inline-block;
  }

  & span a {
    display: inline-block;
    margin-right: 20px;
    text-decoration: none;
    height: 18px;
    color: #666;
    font-size: 14px;
    line-height: 18px;
  }

  & span a.on {
    color: #666;
  }

  & span a.disable {
    color: #cccdd5;
  }

  & span a em {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 8px;
    background: url(https://cdn.upbit.com/images/bg.e801517.png) 0 -355px no-repeat;
    overflow: hidden;
    text-indent: -999em;
    vertical-align: top;
  }

  & span a.on em {
    background-position: -60px -329px;
  }
`;

export const PriceBlock = styled.dd`
  text-align: right;
  height: 53px;

  & strong {
    font-size: 18px;
    font-weight: 700;
  }

  & i {
    color: #666;
    font-size: 11px;
  }
`;

export const MarginBlockA = styled.dd`
  & input {
    width: 250px;
    height: 38px;
    padding: 0 14px;
    border: 1px solid #dfe0e5;
    border-radius: 0.1em 0 0 0.1em;
    line-height: 36px;
    font-size: 14px;
    text-align: right;
    font-weight: 700;
  }

  & a.minus {
    display: inline-block;
    width: 38px;
    height: 38px;
    background: url(https://cdn.upbit.com/images/bg.e801517.png) -220px 0 no-repeat;
    border-top: 1px solid #dfe0e5;
    border-bottom: 1px solid #dfe0e5;
    overflow: hidden;
    text-indent: -999em;
    vertical-align: bottom;
  }

  & a.plus {
    display: inline-block;
    width: 40px;
    height: 38px;
    background: url(https://cdn.upbit.com/images/bg.e801517.png) -270px 0 no-repeat;
    border: 1px solid #dfe0e5;
    border-radius: 0 0.1em 0.1em 0;
    overflow: hidden;
    text-indent: -999em;
    vertical-align: bottom;
  }
`;

export const MarginBlockB = styled.dd`
  & input {
    float: left;
    width: 100%;
    height: 38px;
    padding: 0 14px;
    border: 1px solid #dfe0e5;
    border-radius: 0.1em 0 0 0.1em;
    line-height: 38px;
    color: #2b2b2b;
    font-size: 14px;
    text-align: right;
  }
`;

export const QuantityBlock = styled.dd`
  & a {
    font-size: 12px;
    margin-left: 7px;
    border: 1px solid #dfe0e5;
    font-weight: 400;
    text-decoration: none;
    border-radius: 2px;
    height: 30px;
    line-height: 30px;
    color: #2b2b2b;
    display: inline-block;
    width: 60px;
    text-align: center;
  }

  .qtInput {
    color: #999;
  }
`;

export const MarginBlockC = styled.dd`
  & input {
    float: left;
    width: 100%;
    height: 36px;
    padding: 0 14px;
    border: 1px solid #dfe0e5;
    border-radius: 0.1em 0 0 0.1em;
    line-height: 36px;
    color: #2b2b2b;
    font-size: 14px;
    text-align: right;
  }
`;

export const FixedBottomBlock = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  & span {
    display: block;
    width: 100%;
    margin-bottom: 12px;
    overflow: hidden;
  }

  & span p {
    float: right;
    display: block;
    height: 20px;
    margin: 0;
    margin-right: 14px;
    padding-left: 8px;
    background: url(https://cdn.upbit.com/images/ico_dot_2.38a88b7.png) 0
      no-repeat;
    line-height: 20px;
    color: #2b2b2b;
    overflow: hidden;
  }

  & ul li {
    height: 44px;
    border-radius: 0.1em;
  }

  & ul li.ty01 {
    float: left;
    width: 108px;
    background-color: #0c3887;
  }

  & ul li.ty02 {
    float: right;
    width: 344px;
    background-color: #115dcb;
  }

  & ul li a {
    display: block;
    width: 100%;
    height: 44px;
    line-height: 44px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    overflow: hidden;
  }
`;
