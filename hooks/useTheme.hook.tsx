import * as React from "react";
import { DefaultTheme } from "styled-components";

import { matrix } from "styles/themes/matrix.theme";
import { light } from "styles/themes/light.theme";
import { dark } from "styles/themes/dark.theme";

const themes = [dark, light, matrix];

export const useTheme = (): [DefaultTheme, () => void] => {
  const [theme, setTheme] = React.useState(0);

  return [
    themes[theme],
    () => setTheme((prev) => (prev !== themes.length - 1 ? ++prev : 0)),
  ];
};
