import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: color 0.5s;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.header};
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 6rem;
  }
 
  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 5rem;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 4rem;
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    font-size: 3rem;
  }

  h5 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
  }

  h6 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  p {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.paragraph};
  }
`;

export default GlobalStyle;
