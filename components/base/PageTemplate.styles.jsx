import styled from '@emotion/styled';

export const Block = styled.div`
  .main {
    position: relative;
    width: 1400px;
    margin: 0 auto;
    padding-top: 72px;
  }

  .main:after {
    display: block;
    content: '';
    clear: both;
  }
`;
