import styled from '@emotion/styled';

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
  background-color: #d60000;

  top: 9.37624px;
  height: 5.78177px;
`;

export const Box = styled.span`
  position: absolute;
  width: 7px;
  left: 0;
  display: block;
  overflow: hidden;
  text-indent: -999em;
  background-color: #d60000;

  top: 12.4584px;
  height: 1.04157px;
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
