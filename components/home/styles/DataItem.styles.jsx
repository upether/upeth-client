import styled from '@emotion/styled';

export const Block = styled.li`
  position: relative;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
  padding: 12px 0;

  & a {
    display: flex;
  }

  & label {
    width: 120px;
    float: left;
    height: 24px;
    line-height: 24px;
    white-space: nowrap;
  }

  & p {
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: right;
  }

  :last-of-type {
    border: 0px;
  }

  .data__price {
    padding-right: 100px;
  }

  .data__rate {
    position: absolute;
    margin-left: -100px;
    width: 80px;
  }
`;
