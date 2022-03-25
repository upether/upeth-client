import styled from '@emotion/styled';

export const Block = styled.span`
  position: relative;
  display: block;
  padding: 18px 20px 14px;
  overflow: hidden;
  color: ${(props) =>
    props.change === 'RISE'
      ? '#d60000 !important'
      : props.change === 'FALL'
      ? '#0051c7 !important'
      : ''};

  .up {
    color: #d60000 !important;
  }

  .down {
    color: #0051c7 !important;
  }
`;

export const TypeFormA = styled.div`
  float: left;
  width: 320px;
  color: ${(props) =>
    props.change === 'RISE'
      ? '#d60000 !important'
      : props.change === 'FALL'
      ? '#0051c7 !important'
      : ''};

  & span {
    display: block;
  }

  & span:first-of-type {
    margin: -6px 0 2px 0;
  }

  & span:first-of-type strong {
    font-size: 32px;
    font-weight: 500;
  }

  & span:first-of-type em {
    display: inline-block;
    margin: 0 4px 0 2px;
    font-size: 14px;
  }

  & span:last-child p {
    display: inline-block;
    margin-right: 4px;
    line-height: 19px;
    color: #666;
    font-size: 11px;
  }

  & span:last-child strong {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
  }

  & span:last-child strong:last-child {
    background: ${(props) =>
      props.change === 'RISE'
        ? 'url(https://cdn.upbit.com/images/ico_up.dd56022.png) 0 no-repeat'
        : props.change === 'FALL'
        ? 'url(https://cdn.upbit.com/images/ico_down.3beaa54.png) 0 no-repeat'
        : ''};
    margin-left: 6px;
    padding-left: 14px;
  }
`;

export const TypeFormB = styled.div`
  float: left;
  width: 140px;
  height: 50px;
  margin-top: 2px;
  background-color: #f9fafb;
  overflow: hidden;
`;

export const TypeFormC = styled.div`
  float: right;
  width: 490px;
  display: block;

  & strong {
    font-weight: 500;
  }

  & dl:first-of-type {
    float: left;
    width: 210px;
    margin-left: 30px;
    overflow: hidden;

    & dt {
      float: left;
      width: 16%;
      height: 18px;
      line-height: 18px;
      color: #2b2b2b;
      font-size: 12px;
    }

    & dd {
      float: left;
      width: 84%;
      height: 18px;
      line-height: 18px;
      text-align: right;
      word-break: break-all;
      font-size: 14px;
    }

    & dt:first-of-type {
      margin-bottom: 9px;
      padding-bottom: 9px;
      border-bottom: 1px solid #e3e5ec;
      height: 36px;
      line-height: 36px;
    }

    & dd:first-of-type {
      margin-bottom: 9px;
      padding-bottom: 9px;
      border-bottom: 1px solid #e3e5ec;
      height: 36px;
      line-height: 36px;
    }
  }

  & dl:last-child {
    float: left;
    width: 210px;
    margin-left: 20px;
    overflow: hidden;

    & dt {
      float: left;
      width: 35%;
      height: 18px;
      line-height: 18px;
      color: #2b2b2b;
      font-size: 12px;
    }

    & dd {
      float: left;
      width: 65%;
      height: 18px;
      line-height: 18px;
      text-align: right;
      word-break: break-all;
      font-size: 12px;
    }

    & dt:first-of-type {
      margin-bottom: 9px;
      padding-bottom: 9px;
      border-bottom: 1px solid #e3e5ec;
      height: 36px;
      line-height: 36px;
    }

    & dd:first-of-type {
      margin-bottom: 9px;
      padding-bottom: 9px;
      border-bottom: 1px solid #e3e5ec;
      height: 36px;
      line-height: 36px;
    }
  }
`;
