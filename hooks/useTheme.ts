import * as React from "react";
import { DefaultTheme } from "styled-components";

import matrix from "@/styles/matrix.theme";
import light from "@/styles/light.theme";
import dark from "@/styles/dark.theme";

const themes = [dark, light, matrix];

const useTheme = (): [DefaultTheme, () => void] => {
  const [theme, setTheme] = React.useState(0);

  return [
    themes[theme],
    () => setTheme((prev) => (prev !== themes.length - 1 ? ++prev : 0)),
  ];
};

export default useTheme;
