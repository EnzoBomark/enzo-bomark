import { style, styleVariants } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1rem',
  borderBottom: `1px solid ${color.semantic.neutral[800]}`,
  color: color.semantic.neutral[200],
});

const hamburger = style({
  all: 'unset',
  cursor: 'pointer',
  padding: '12px 12px',
});

const upper = style({
  width: '20px',
  height: '1.5px',
  backgroundColor: color.semantic.neutral[200],
  margin: '6px 0',
  borderRadius: '1px',
  transition:
    'background-color 0.1s ease-in-out, transform 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965)',

  selectors: {
    [`${hamburger}:hover &`]: {
      backgroundColor: color.semantic.neutral[300],
    },
  },
});

const upperVariants = styleVariants({
  open: {
    transform: 'rotate(45deg) translate(3px, 3px)',
  },
  closed: {
    transform: 'rotate(0deg) translate(0px, 0px)',
  },
});

const lower = style({
  width: '20px',
  height: '1.5px',
  backgroundColor: color.semantic.neutral[200],
  margin: '6px 0',
  borderRadius: '2px',
  transition:
    'background-color 0.1s ease-in-out, transform 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965)',

  selectors: {
    [`${hamburger}:hover &`]: {
      backgroundColor: color.semantic.neutral[300],
    },
  },
});

const lowerVariants = styleVariants({
  open: {
    transform: 'rotate(-45deg) translate(2px, -2.5px)',
  },
  closed: {
    transform: 'rotate(0deg) translate(0px, px)',
  },
});

const sidebarVariants = styleVariants({
  open: {
    position: 'fixed',
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: color.semantic.neutral[900],
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem',
  },
  closed: {
    display: 'none',
  },
});

const nav = styleVariants({
  horiz: {
    textDecoration: 'none',
    display: 'flex',
    gap: '2rem',
  },
  vert: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
});

export const styles = {
  container,
  hamburger,
  upper,
  upperVariants,
  lower,
  lowerVariants,
  sidebarVariants,
  nav,
};
