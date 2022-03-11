import styled from '@emotion/styled';

export const Block = styled.span`
  display: flex;
  height: 42px;
  border-bottom: 1px solid #d5d6dc;
`;

export const Search = styled.div`
  position: relative;
  width: 356px;
  height: 42px;
  padding: 8px 9px 8px 14px;
  border-right: 1px solid #d5d6dc;

  & input {
    float: left;
    width: 304px;
    height: 26px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    border: 0;
    color: #2b2b2b;
    font-weight: 700;
  }

  & a {
    float: left;
    width: 26px;
    height: 26px;
    background: url(https://cdn.upbit.com/images/bg.e801517.png) -90px 0 no-repeat;
    text-indent: -999em;
  }

  & a.btnX {
    position: absolute;
    top: 15px;
    right: 45px;
    width: 11px;
    height: 10px;
    background: url(https://cdn.upbit.com/images/ico_x.6b98971.png) 0 0
      no-repeat;
    overflow: hidden;
    text-indent: -999em;
  }
`;

export const Setting = styled.div`
  width: 44px;
  height: 42px;

  & a {
    display: block;
    height: 100%;
    position: relative;
    text-indent: -9999em;
    cursor: pointer;
  }

  & a:after {
    content: '';
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
