import styled from '@emotion/styled';

export const Block = styled.div`
  float: left;
  width: 50%;
  padding-right: 5px;
  box-sizing: border-box;

  & article {
    float: left;
    width: 100%;
    margin-bottom: 10px;
    background-color: #fff;
    box-shadow: 2px 2px 4px #dee1e7;
  }
`;

export const AskPriceA = styled.span`
  display: block;
  width: 100%;

  & div {
    position: relative;
  }

  & ul {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  & ul li {
    display: table-cell;
    width: auto;
    float: none;
  }

  & ul li a {
    display: block;
    width: 100%;
    height: 43px;
    border-bottom: 1px solid #d4d6dc;
    line-height: 43px;
    color: #2b2b2b;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }

  & ul li a.on {
    border-bottom: 3px solid #115dcb;
    color: #115dcb;
  }
`;

export const AskPriceB = styled.span`
  position: relative;
  display: block;
  width: 100%;

  & > div {
    height: 694px;
  }
`;
