import { createTheme } from '@vanilla-extract/css';

export const breakpoints = Object.freeze({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
});

export const breakpointMediaQuery = Object.freeze({
  sm: `screen and (min-width: ${breakpoints.sm}px)`,
  md: `screen and (min-width: ${breakpoints.md}px)`,
  lg: `screen and (min-width: ${breakpoints.lg}px)`,
  xl: `screen and (min-width: ${breakpoints.xl}px)`,
});

export const [variablesClass, variables] = createTheme({
  breakpoint: {
    sm: `${breakpoints.sm}px`,
    md: `${breakpoints.md}px`,
    lg: `${breakpoints.lg}px`,
    xl: `${breakpoints.xl}px`,
  },
  typography: {
    heading: {
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
    },
    subheading: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    headline: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
    subheadline: {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
    },
    body: {
      fontSize: '1rem',
      lineHeight: '1.375rem',
    },
    caption: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    tag: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
  },
  spacing: {
    none: '0',
    2: '0.125rem',
    3: '0.1875rem',
    4: '0.25rem',
    6: '0.375rem',
    8: '0.5rem',
    12: '0.75rem',
    16: '1rem',
    20: '1.25rem',
    24: '1.5rem',
    28: '1.75rem',
    32: '2rem',
    36: '2.25rem',
    40: '2.5rem',
    48: '3rem',
    64: '4rem',
    96: '6rem',
    128: '8rem',
    192: '12rem',
    256: '16rem',
    384: '24rem',
    512: '32rem',
    768: '48rem',
    1024: '64rem',
  },
});
