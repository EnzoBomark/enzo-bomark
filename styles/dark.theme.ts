import { DefaultTheme } from "styled-components";

const querySize = {
  xs: "(min-width: 480px)",
  sm: "(min-width: 680px)",
  md: "(min-width: 992px)",
  lg: "(min-width: 1500px)",
  xl: "(min-width: 1650px)",
  xxl: "(min-width: 2000px)",
};

const dark: DefaultTheme = {
  ...querySize,
};

export default dark;
