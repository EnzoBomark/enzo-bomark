import { fontFace } from '@vanilla-extract/css';

export const hyperlegible = fontFace([
  {
    src: "url('/fonts/hyperlegible-regular.ttf')",
    fontWeight: '400',
    fontStyle: 'normal',
  },
  {
    src: "url('/fonts/hyperlegible-regular-italic.ttf')",
    fontWeight: '400',
    fontStyle: 'italic',
  },
  {
    src: "url('/fonts/hyperlegible-bold.ttf')",
    fontWeight: '700',
    fontStyle: 'normal',
  },
  {
    src: "url('/fonts/hyperlegible-bold-italic.ttf')",
    fontWeight: '700',
    fontStyle: 'italic',
  },
]);
