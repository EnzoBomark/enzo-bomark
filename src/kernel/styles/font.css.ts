import { globalFontFace } from '@vanilla-extract/css';

export const Hyperlegible = 'Hyperlegible';

globalFontFace(Hyperlegible, {
  src: [
    "url('/fonts/hyperlegible-regular.ttf')",
    "url('/fonts/hyperlegible-regular-italic.ttf')",
    "url('/fonts/hyperlegible-bold.ttf')",
    "url('/fonts/hyperlegible-bold-italic.ttf')",
  ].join('\n,'),
});
