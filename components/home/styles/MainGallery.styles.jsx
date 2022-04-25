import styled from '@emotion/styled';

export const Block = styled.article`
  height: 240px;
  width: 100%;
  min-width: 1400px;

  & h1 {
    text-align: center;
    margin-top: 160px;
    font-size: 32px;
  }
`;

export const BtnList = styled.div`
  display: block;
  text-align: center;
  margin-top: 60px;
`;

export const BtnA = styled.div`
  margin: 0 5px;
  width: 150px;
  height: 46px;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  line-height: 46px;
  color: #fff;
  font-size: 16px;
  background-color: #0062df;

  &:hover {
    cursor: pointer;
  }
`;

export const BtnB = styled.div`
  margin: 0 5px;
  width: 150px;
  height: 46px;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  line-height: 46px;
  color: #fff;
  font-size: 16px;
  background-color: #093687;

  &:hover {
    cursor: pointer;
  }
`;
