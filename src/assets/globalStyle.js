import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: white;
  }
  
  :root {
    font-size: 62.5%;
  }
  
  p {
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
