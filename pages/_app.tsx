import React from 'react';
import 'animate.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global/global';
import { useTheme } from 'hooks/useTheme';
import { MetaData } from './_metadata';
import { Layout } from 'components/layout/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <MetaData />

      <GlobalStyles />

      <div id="portal" />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
