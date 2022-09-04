export const mediaSize = {
  xxs: 320,
  xs: 375,
  s: 425,
  m: 768,
  l: 1024,
  xl: 1440,
  xxl: 2560,
} as const;

export const device = {
  xxs: `(min-width: ${mediaSize.xxs}px)`,
  xs: `(min-width: ${mediaSize.xs}px)`,
  s: `(min-width: ${mediaSize.s}px)`,
  m: `(min-width: ${mediaSize.m}px)`,
  l: `(min-width: ${mediaSize.l}px)`,
  xl: `(min-width: ${mediaSize.xl}px)`,
  xxl: `(min-width: ${mediaSize.xxl}px)`,
} as const;
