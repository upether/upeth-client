import styled from '@emotion/styled';

export const Block = styled.section`
  float: left;
  width: 990px;

  & > div {
    float: left;
    width: 100%;
    background-color: #e9ecf1;
  }

  .left {
    float: left;
    width: 50%;
    padding-right: 5px;
    box-sizing: border-box;
  }

  .right {
    float: left;
    width: 50%;
    padding-left: 5px;
  }
`;
