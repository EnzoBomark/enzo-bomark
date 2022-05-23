import { DefaultTheme } from "styled-components";

const querySize = {
  xs: "(min-width: 480px)",
  sm: "(min-width: 680px)",
  md: "(min-width: 992px)",
  lg: "(min-width: 1500px)",
  xl: "(min-width: 1650px)",
  xxl: "(min-width: 2000px)",
};

const color = {
  primary: "#FFFFFA",
  secondary: "#FFFFFACC",
  accent: "#4A38BC",
  detail: "#9D8DF1",
  contrast: "#FFDF00",
  header: "#121317",
  paragraph: "#2C2E38",
};

const light: DefaultTheme = {
  ...querySize,
  ...color,
};

export default light;
