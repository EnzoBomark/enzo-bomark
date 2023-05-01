import React, { useEffect, useState } from 'react';
import { S } from './ThemePicker.styles';
import { Icon } from 'assets/icons';
import {
  ActiveTheme,
  activeThemeEmitter,
  useActiveTheme,
} from './hooks/useThemeListener';

export const ThemePicker: React.FC = () => {
  const activeTheme = useActiveTheme();

  const toggleLightTheme = () => {
    activeThemeEmitter.notify({ activeTheme: ActiveTheme.Light });
  };

  const toggleDarkTheme = () => {
    activeThemeEmitter.notify({ activeTheme: ActiveTheme.Dark });
  };

  const toggleMatrixTheme = () => {
    activeThemeEmitter.notify({ activeTheme: ActiveTheme.Matrix });
  };

  return (
    <S.ThemePickerContainer>
      <S.ThemePickerButton onClick={toggleDarkTheme}>
        <Icon type="Moon" width="s" />
      </S.ThemePickerButton>

      <S.ThemePickerButton onClick={toggleLightTheme}>
        <Icon type="Sun" width="s" />
      </S.ThemePickerButton>

      <S.ThemePickerButton onClick={toggleMatrixTheme}>
        <Icon type="Bolt" width="s" />
      </S.ThemePickerButton>
    </S.ThemePickerContainer>
  );
};
