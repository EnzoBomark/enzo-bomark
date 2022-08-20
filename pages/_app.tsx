import * as React from "react";
import * as Next from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/styles/global/global";
import Main from "@/layout/Main";
import useTheme from "@/hooks/useTheme";
import MetaData from "./_metadata";

const MyApp: React.FC<Next.AppProps> = ({ Component, pageProps }) => {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <MetaData />
      <GlobalStyle />

      <div id="portal" />

      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
};

export default MyApp;
