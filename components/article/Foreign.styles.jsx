import styled from '@emotion/styled';

export const Block = styled.span`
  display: block;
  height: 32px;
  padding: 7px 20px;
  background-color: #f9fafc;
  border-top: 1px solid #f5f6fa;
  overflow: hidden;

  & ul {
    display: flex;
    font-size: 12px;
  }

  & ul li {
    float: left;
    width: 25%;
    height: 18px;
    line-height: 18px;
    color: #2b2b2b;
    overflow: hidden;

    flex: 1;
    max-width: 330px;
  }

  & ul li em {
    float: left;
    display: block;
    margin-right: 10px;
    color: #3f8ac9;
  }

  & ul li strong {
    float: left;
    margin-right: 5px;
    font-size: 13px;
    font-weight: 500;
  }

  & ul li p {
    float: left;
    color: #999;
    font-size: 11px;
  }
`;
