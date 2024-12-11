import { globalFontFace } from '@vanilla-extract/css';

export const NeueHaas = 'NeueHaas';

globalFontFace(NeueHaas, {
  src: ["url('/fonts/roman.ttf')", "url('/fonts/roman-italic.ttf')"].join(
    '\n,'
  ),
});
