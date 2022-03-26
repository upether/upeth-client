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


  & thead tr th a span:nth-child(2) {
    margin-left:2px !important;
    vertical-align: middle;
  }
`;
