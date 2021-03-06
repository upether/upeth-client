import styled from '@emotion/styled';

export const Block = styled.span`
  position: relative;
  display: block;
  height: 42px;
  padding: 0 14px;
  border-bottom: 1px solid #d4d6dc;
`;

export const Select = styled.a`
  display: inline-block;
  height: 42px;
  padding-right: 0;

  & em {
    float: left;
    line-height: 42px;
    padding-right: 10px;
    // 추가
    display: flex;
    align-items: center;
    height: inherit;
  }

  & em img {
    vertical-align: middle;
    max-width: 26px;
    max-height: 26px;
  }

  & strong {
    float: left;
    margin-top: 8px;
    font-size: 20px;
  }

  & p {
    float: left;
    margin: 16px 4px 0;
    font-size: 12px;
  }
`;

export const Arrow = styled.a`
  display: inline-block;
  height: 42px;
  width: 29px;
  padding: 0 8px;
  background: url(https://cdn.upbit.com/images/ico_select_1.34dc566.png) center
    18px no-repeat;
  overflow: hidden;
  text-indent: -999em;
  vertical-align: top;
`;

export const InfoTab = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  & dl dd {
    float: left;
  }

  & dl dd a {
    display: block;
    width: 140px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }

  .on {
    height: 42px;
    border-bottom: 3px solid #115dcb;
    color: #115dcb;
  }
`;

export const TextReplace = styled.dt`
  height: 0;
  overflow: hidden;
  font: 0/0 Arial;
  text-indent: -1000em;
`;

export const Setting = styled.div`
  float: right;
  width: 44px;
  height: 42px;
  border-left: 1px solid #e3e5ec;

  & a {
    display: block;
    height: 100%;
    position: relative;
    text-indent: -9999em;
    overflow: hidden;
    cursor: pointer;
  }

  & a:after {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(https://cdn.upbit.com/images/icon_setting.c6c76e6.png)
      no-repeat;
  }
`;
