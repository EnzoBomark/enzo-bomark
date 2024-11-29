import { globalFontFace } from '@vanilla-extract/css';

export const inter = 'Inter';

globalFontFace(inter, {
  src: ["url('/fonts/Inter-Regular.ttf')", "url('/fonts/Inter-Bold.ttf')"].join(
    '\n,'
  ),
});
