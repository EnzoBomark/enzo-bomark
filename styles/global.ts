import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", sans-serif;
  }

  html {

  }

  body {
    background-color: ${({ theme }) => theme.sm};;
  }
`;

export default GlobalStyle;
