import styled from '@emotion/styled';

export const Block = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #093687;
  z-index: 100;

  & section {
    position: relative;
    max-width: 1400px;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    margin: 0 auto;
  }

  & section h1 {
    float: left;
  }

  & section h1 a {
    font-size: 20px;
    color: white;
  }

  & section nav {
    float: left;
    margin-left: 60px;
  }

  & section nav a {
    margin-left: 40px;
    font-size: 15px;
    text-decoration: none;
    color: rgba(165, 175, 202, 0.6);
  }

  & section nav a:first-of-type {
    margin-left: 0;
  }

  & section ul {
    position: absolute;
    right: 20px;
  }

  & section ul li {
    position: relative;
    float: left;
    padding-left: 30px;
  }

  & section ul li a {
    font-size: 13px;
    color: #fff;
    cursor: pointer;
  }
`;
