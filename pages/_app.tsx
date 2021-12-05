import * as React from "react";
import * as Next from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/styles/global";
import Main from "@/layout/Main";
import useTheme from "@/hooks/useTheme";

const METADATA = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <title>U11</title>
      <meta name="description" content="An example of a meta description." />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
  );
};

const MyApp = ({ Component, pageProps }: Next.AppProps) => {
  const [theme, themeChangeHandler] = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <METADATA />
      <GlobalStyle />
      <div id="portal" />
      <Main>
        <button onClick={themeChangeHandler}>Toggle</button>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
};

export default MyApp;
