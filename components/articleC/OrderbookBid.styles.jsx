import styled from '@emotion/styled';

export const Block = styled.tr`
  & > td {
    height: 45px;
    border-right: 1px solid #f1f1f4;
    border-top: 1px solid #f1f1f4;
  }

  .up {
    color: #d60000 !important;
  }

  .down {
    color: #0051c7 !important;
  }
`;

export const Bar = styled.td`
  position: relative;
  padding-right: 8px;
  text-align: left;

  & div {
    background-color: rgba(216, 14, 53, 0.09);
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
    left: 6px;
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

export const Up = styled.td`
  padding-right: 8px;
  background-color: rgba(216, 14, 53, 0.03);
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
  vertical-align: top;

  & dl {
    margin: 0 10px;
    overflow: hidden;
  }

  & dl dt {
    float: left;
    width: 40%;
    height: 30px;
    line-height: 30px;
    color: #333;
    font-size: 11px;
    text-align: left;
  }

  & dl dd {
    float: left;
    width: 60%;
    height: 30px;
    line-height: 30px;
    color: #333;
    font-size: 11px;
    text-align: right;
  }
`;

export const OverFlow = styled.div`
  height: 420px;
  overflow: hidden;

  & table {
    width: 100%;
  }

  & table thead tr th {
    height: 30px;
    border-top: 1px solid #f1f1f4;
    border-bottom: 1px solid #f1f1f4;
    text-align: center;
    background: #f9fafc;
    color: #666;
    font-size: 11px;
  }

  & table thead tr th:last-child {
    background: #f9fafc url(https://cdn.upbit.com/images/ico_th.a3fea2b.png) 0
      no-repeat;
  }

  & table tbody tr td {
    height: 20px;
    color: #333;
    font-size: 11px;
    text-align: right;
    box-sizing: content-box;
  }

  & table tbody tr:first-of-type td {
    padding-top: 5px;
  }

  & table tbody tr td:first-of-type {
    padding-right: 4px;
  }

  & table tbody tr td:last-of-type {
    padding-right: 10px;
  }
`;
