import { useActiveTheme } from 'components/layout/ThemePicker/hooks/useThemeListener';

import { matrix } from 'styles/themes/matrix.theme';
import { light } from 'styles/themes/light.theme';
import { dark } from 'styles/themes/dark.theme';

const themes = [dark, light, matrix];

export const useTheme = () => {
  const activeTheme = useActiveTheme();
  return themes[activeTheme];
};
