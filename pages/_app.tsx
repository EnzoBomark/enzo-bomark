import React from 'react';
import 'animate.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global/global';
import { useTheme } from 'hooks/useTheme.hook';
import { Main } from 'components/layout/Main';
import { Header } from 'components/layout/Header';
import { Footer } from 'components/layout/Footer';
import { MetaData } from './_metadata';

const App = ({ Component, pageProps }: AppProps) => {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <MetaData />

      <GlobalStyles />

      <div id="portal" />

      <Header />

      <Main>
        <Component {...pageProps} />
      </Main>

      <Footer />
    </ThemeProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
