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
    left: 6px;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    color: #2b2b2b;
    font-size: 12px;
  }
`;

export const Down = styled.td`
  padding-right: 8px;
  background-color: rgba(0, 98, 223, 0.03);
  color: #0051c7;
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
`;

export const Inner = styled.td`
  width: 162px;
  vertical-align: top;

  & dl {
    margin: 0 10px;
    overflow: hidden;
  }

  & dl dt {
    float: left;
    width: 40%;
    color: #84868c;
    height: 30px;
    line-height: 30px;
    font-size: 11px;
    letter-spacing: 0;
    text-align: left;
  }

  & dl dd {
    float: left;
    width: 60%;
    height: 30px;
    line-height: 30px;
    color: #2b2b2b;
    font-size: 11px;
    text-align: right;
  }
`;

export const OverFlow = styled.div`
  // height: 419px;
  overflow: hidden;

  & table {
    width: 100%;
    border-spacing: 0;
  }

  & table thead tr th {
    height: 30px;
    border-top: 1px solid #f1f1f4;
    border-bottom: 1px solid #f1f1f4;
    text-align: center;
    background-color: #f9fafc;
    color: #666;
    font-size: 11px;
  }

  & table thead tr th:last-child {
    background: #f9fafc url(https://cdn.upbit.com/images/ico_th.a3fea2b.png) 0
      no-repeat;
  }

  & table tbody tr td {
    height: 20px;
    color: #595959;
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

  & table tbody tr td:last-child {
    padding-right: 10px;
  }
`;
