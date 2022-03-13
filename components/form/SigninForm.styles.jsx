import styled from '@emotion/styled';

export const Block = styled.div`
  max-width: 450px;
  padding: 60px 68px 40px;
  margin: 0 auto;
`;

export const Main = styled.div`
  & h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
  }

  & button {
    // @media only screen and (min-width: 360px)
    width: 100%;

    // @media only screen and (min-width: 500px)
    padding: 16px;
    border: 0;

    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    margin: 24px 0 12px;

    background: #093687;
    color: white;
  }
`;

export const Other = styled.div``;

export const ErrorMessage = styled.div`
  margin: 0 0 16px;
  padding: 12px 20px;
  border-radius: 4px;
  background: #4169e1;
  font-size: 12px;
  color: white;

  a {
    text-decoration: underline;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  padding-bottom: 16px;

  & input {
    width: 100%;
    height: 50px;
    padding: 12px 20px 0;
    border: 0;
    border-radius: 4px;
    outline: none;
    background: #333;
    font-size: 16px;
    color: white;

    :focus {
      background: #454545;
    }
  }

  & label {
    position: absolute;
    left: 20px;
    color: #8c8c8c;
    top: 16px;
    font-size: 16px;
    // top: ${(props) => (props.$isFocusEmail ? '8px' : '16px')};
    // font-size: ${(props) => (props.$isFocusEmail ? '12px' : '16px')};
    transition: all 0.2s ease;
    user-select: none;
  }

  & div {
    color: #4169e1;
    font-size: 12px;
    margin-bottom: -8px;
    padding: 4px;
  }
`;

export const HelpContainer = styled.div`
  display: flex;

  & div {
    position: relative;
    flex-grow: 1;
    padding-left: 20px;
  }

  & div input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  & div label::before {
    content: '';
    position: absolute;
    display: block;
    top: 0px;
    left: 0px;

    background: #737373;
    border-radius: 2px;
    border: 0;
    height: 16px;
    width: 16px;
  }

  & div label::after {
    // Check
  }

  & a {
    :hover {
      text-decoration: underline;
    }
  }
`;
