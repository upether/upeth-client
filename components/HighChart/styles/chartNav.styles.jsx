import styled from '@emotion/styled';

export const Dropdown = styled.a`
  border-bottom: 3px solid #fff;
  position: relative;
  margin-top: 2px;
  a:hover {
    background: #f4f5f8;
    color: #2b2b2b;
  }
`;
export const DropdownItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #d4d6dc;
  clear: both;
  line-height: 27px;
  height: 27px;
  display: flex;
  position: relative;
  cursor: pointer;
  background-color: white;
  text-overflow: clip;
  white-space: nowrap;
  z-index: 10;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 38px;
  border-bottom: 1px solid #d4d6dc;
  background: #f8f8f8;
`;

export const StyledSpan = styled.span`
  content: '';
  position: absolute;
  right: 1px;
  top: 15px;
  display: block;
  width: 5px;
  height: 5px;
  border-right: thin solid #999;
  border-bottom: thin solid #999;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  zoom: 1;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 38px;
  width: 38px;
  color: #2b2b2b;
`;

export const DropdownButton = styled.div`
  display: flex;
  flex-direction: column;
  height: 38px;
  width: 38px;
  padding: 10px 0px 10px 0px;
  justify-content: center;
  align-items: center;
  color: #2b2b2b;
`;
