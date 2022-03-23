import styled from '@emotion/styled';

export const Block = styled.tr`
  & td {
    height: 45px;
    border-right: 1px solid #f1f1f4;
    border-top: 1px solid #f1f1f4;
  }

  .up {
    color: #d60000;
  }

  .down {
    color: #0051c7;
  }
`;

export const Bar = styled.td`
  position: relative;
  padding-left: 8px;
  text-align: right;

  & div {
    background-color: rgba(0, 98, 223, 0.09);
    color: #2b2b2b;
    vertical-align: middle;
    overflow: hidden;
    text-indent: 999em;
    display: inline-block;
    height: 26px;
    line-height: 26px;
  }

  & p {
    position: absolute;
    top: 8px;
    right: 6px;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    color: #2b2b2b;
    font-size: 12px;
  }

  :hover {
    cursor: pointer;
  }
`;

export const Down = styled.td`
  padding-right: 8px;
  background-color: rgba(0, 98, 223, 0.03);
`;

export const TypeFormA = styled.div`
  float: left;
  width: 60%;
  line-height: 36px;
  text-align: right;

  & strong {
    display: block;
    font-weight: 700;
    font-size: 13px;
  }
`;

export const TypeFormB = styled.div`
  float: left;
  width: 40%;
  line-height: 36px;
  text-align: right;
  font-size: 12px;
`;

export const InnerBlock = styled.td`
  width: 162px;
  vertical-align: bottom;

  & dl {
    margin: 0 10px;
    padding: 10px 0;
    border-top: 1px solid #f1f1f4;
    overflow: hidden;
  }

  & dl dt {
    float: left;
    width: 40%;
    color: #84868c;
    line-height: 1.8em;
    font-size: 11px;
    letter-spacing: 0;
    text-align: left;
  }

  & dl dd {
    float: left;
    width: 60%;
    line-height: 1.8em;
    color: #2b2b2b;
    font-size: 11px;
    text-align: right;
  }

  & dl dd i {
    color: #999;
    font-size: 10px;
    padding-left: 2px;
  }

  & dl dd em {
    display: block;
    color: #999;
    font-size: 11px;
  }
`;
