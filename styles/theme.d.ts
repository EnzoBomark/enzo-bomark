import { DefaultTheme } from "styled-components";

interface querySize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends querySize {}
}
