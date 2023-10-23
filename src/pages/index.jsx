import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import theme from '../assets/theme';
import GlobalStyle from '../assets/globalStyle';

function IndexPage() {
  const [counter, setCounter] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button type="button" onClick={() => setCounter(counter + 1)}>Click</button>
      <p>
        Liczba klikniec:
        {counter}
      </p>
    </ThemeProvider>
  );
}

export default IndexPage;

export function Head() {
  return <title>Home Page</title>;
}
