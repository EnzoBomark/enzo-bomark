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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Redacted+Script:wght@300;400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
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
