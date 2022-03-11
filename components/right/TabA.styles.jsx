import styled from '@emotion/styled';

export const Block = styled.span`
  display: block;
  width: 100%;

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

  & .buy__on {
    border-bottom: 3px solid #d80e35;
    color: #d80e35;
  }

  & .sell__on {
    border-bottom: 3px solid #115dcb;
    color: #115dcb;
  }

  & .on {
    border-bottom: 3px solid #2b2b2b;
    color: #2b2b2b;
  }
`;
