import { style, styleVariants } from '@vanilla-extract/css';
import {
  animation,
  breakpointMediaQuery,
  color,
  variables,
} from '~/kernel/styles';

const container = style({
  position: 'sticky',
  top: 0,
  zIndex: 1000,
});

const background = style({
  position: 'absolute',
  width: '100%',
  height: '2.5rem',
  backgroundColor: color.semantic.neutral[900],
  opacity: 0.9,
});

const inner = style({
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 0.25rem ',
  borderBottom: `1px solid ${color.semantic.neutral[800]}`,
  color: color.semantic.neutral[200],
  WebkitBackdropFilter: 'blur(18px)',
  backdropFilter: 'blur(18px)',
});

const hamburger = style({
  all: 'unset',
  cursor: 'pointer',
  padding: '10px',
  visibility: 'visible',

  '@media': {
    [breakpointMediaQuery.sm]: {
      visibility: 'hidden',
    },
  },
});

const upperBase = style({
  width: '20px',
  height: '1.5px',
  backgroundColor: color.semantic.neutral[200],
  margin: '6px 0',
  borderRadius: '1px',
  transition: `background-color 0.1s ease-in-out, transform 0.2s ${animation.cubicBezier.easeInOut}`,

  selectors: {
    [`${hamburger}:hover &`]: {
      backgroundColor: color.semantic.neutral[300],
    },
  },
});

const upper = styleVariants({
  open: [
    upperBase,
    {
      transform: 'rotate(45deg) translate(3px, 3px)',
    },
  ],
  closed: [
    upperBase,
    {
      transform: 'rotate(0deg) translate(0px, 0px)',
    },
  ],
});

const lowerBase = style({
  width: '20px',
  height: '1.5px',
  backgroundColor: color.semantic.neutral[200],
  margin: '6px 0',
  borderRadius: '2px',
  transition: `background-color 0.1s ease-in-out, transform 0.2s ${animation.cubicBezier.easeInOut}`,

  selectors: {
    [`${hamburger}:hover &`]: {
      backgroundColor: color.semantic.neutral[300],
    },
  },
});

const lower = styleVariants({
  open: [
    lowerBase,
    {
      transform: 'rotate(-45deg) translate(2px, -2.5px)',
    },
  ],
  closed: [
    lowerBase,
    {
      transform: 'rotate(0deg) translate(0px, px)',
    },
  ],
});

const logo = style({
  color: color.semantic.neutral[200],
  textDecoration: 'none',
});

const sidebarBase = style({
  position: 'absolute',
  width: '100%',
  height: 'calc(100vh - 2.5rem)',
  backgroundColor: color.semantic.neutral[900],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
});

const sidebar = styleVariants({
  open: [
    sidebarBase,
    {
      '@media': {
        [breakpointMediaQuery.sm]: {
          display: 'none',
        },
      },
    },
  ],
  closed: {
    display: 'none',
  },
});

const nav = styleVariants({
  horiz: {
    textDecoration: 'none',
    gap: '2rem',
    display: 'flex',
    visibility: 'hidden',

    '@media': {
      [breakpointMediaQuery.sm]: {
        visibility: 'visible',
      },
    },
  },
  vert: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    marginBottom: '2.5rem',
  },
});

const link = styleVariants({
  inactive: {
    fontSize: variables.typography.tag.fontSize,
    lineHeight: variables.typography.tag.lineHeight,
    color: color.semantic.neutral[400],

    ':hover': {
      color: color.semantic.neutral[200],
    },
  },
  active: {
    fontSize: variables.typography.tag.fontSize,
    lineHeight: variables.typography.tag.lineHeight,
    color: color.semantic.neutral[200],
  },
});

export const styles = {
  container,
  background,
  inner,
  hamburger,
  upper,
  lower,
  logo,
  sidebar,
  nav,
  link,
};
