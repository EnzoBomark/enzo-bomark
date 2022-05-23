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
  primary: "#000000",
  secondary: "#000000",
  accent: "#20C20E",
  detail: "#20C20E",
  contrast: "#20C20E",
  header: "#20C20E",
  paragraph: "#20C20E",
};

const matrix: DefaultTheme = {
  ...querySize,
  ...color,
};

export default matrix;
