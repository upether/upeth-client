import styled from '@emotion/styled';

export const Block = styled.table`
  width: 100%;
  border-spacing: 0;

  & thead tr th {
    height: 30px;
    background-color: #f9fafc;
    color: #666;
    font-size: 11px;

    :hover {
      text-decoration: underline;
    }
  }
  & thead tr th a div {
    display: flex;
    justify-content: center;
    & div{
      margin-left:3px;
      align-items: center;
      transform: translateY(10%);
    }
  }

  & thead tr th a img {
    vertical-align: middle;
  }
`;
