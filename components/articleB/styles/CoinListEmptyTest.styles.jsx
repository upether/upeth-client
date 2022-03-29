import styled from '@emotion/styled';

export const Block = styled.div`
  position: relative;
  height: 300px;
  text-align: center;

  & i {
    display: block;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    line-height: 22px;
    color: #999;
    letter-spacing: 0;
  }
`;
