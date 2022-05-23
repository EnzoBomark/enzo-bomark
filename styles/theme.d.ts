import { DefaultTheme } from "styled-components";

interface querySize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

interface color {
  primary: string;
  secondary: string;
  detail: string;
  accent: string;
  contrast: string;
  header: string;
  paragraph: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends querySize, color {}
}
