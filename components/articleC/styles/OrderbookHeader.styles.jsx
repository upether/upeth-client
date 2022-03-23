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

  .on {
    border-bottom: 3px solid #115dcb;
    color: #115dcb;
  }
`;
