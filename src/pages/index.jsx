import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import theme from '../assets/theme';
import GlobalStyle from '../assets/globalStyle';

const Wrapper = styled.div`
  max-width: 1280px;
  padding: 9.6rem;
  margin: 0 auto;
`;

function IndexPage() {
  const [counter, setCounter] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>

        <button type="button" onClick={() => setCounter(counter + 1)}>Click</button>
        <p>
          Liczba klikniec:
          {' '}
          {counter}
        </p>
      </Wrapper>
    </ThemeProvider>
  );
}

export default IndexPage;

export function Head() {
  return <title>Home Page</title>;
}
