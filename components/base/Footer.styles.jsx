import styled from '@emotion/styled';

export const Block = styled.footer`
  width: 100%;
  min-width: 1400px;
  max-width: none;
  border-top: 1px solid #eee;
  padding: 40px 0;
  height: auto;
  display: block;

  background-color: #fff;
  overflow: hidden;

  .sub {
    margin-top: 60px;
  }

  .sub:after {
    clear: both;
    content: '';
    display: block;
  }

  & > div {
    // @media (min-width: 1201px) and (max-width: 1400px)
    width: 1400px;

    margin: 0 auto;
    padding: 0 20px;
    position: relative;
  }

  & > div > a {
    position: absolute;
    left: 20px;
    top: 6px;
    width: 77px;
    margin-top: 0;
    height: 17px;
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    color: #093687;
  }

  .aboutUS {
    float: left;

    & p {
      padding-left: 120px;
      line-height: 24px;
    }

    & p span {
      font-size: 13px;
    }

    & p span:before {
      content: '';
      padding: 0 5px;
      height: 13px;
      display: inline-block;
    }

    & p span:first-of-type:before {
      padding: 0;
    }

    & p span:after {
      content: '';
      padding: 0 5px;
      height: 12px;
      margin-bottom: 3px;
      display: inline-block;
      vertical-align: middle;
      border-right: 1px solid #ddd;
    }
  }

  .contact {
    color: #2b2b2b;
  }

  .ourCompany {
    color: #999;
  }

  .Officer {
    color: #999;
  }

  .copyright {
    font-size: 11px;
  }

  .footerMenu {
    float: right;

    // @media (min-width: 1201px) and (max-width: 1400px)
    width: 420px;
    margin-right: 0;

    & dl {
      width: 50%;
      float: left;
      font-size: 13px;
    }

    & dl dt {
      color: #2b2b2b;
      margin-bottom: 10px;
      font-weight: 700;
    }

    & dl dd {
      line-height: 25px;
    }

    & dl dd a {
      color: #666;
    }

    & dl dd a strong {
      color: #093687;
      font-size: 15px;
      font-weight: 700;
    }
  }
`;
