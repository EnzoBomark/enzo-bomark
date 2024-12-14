import { style } from '@vanilla-extract/css';
import { breakpointMediaQuery, color, variables } from '~/kernel/styles';

const background = style({
  position: 'absolute',
  width: '100%',
  height: '2.5rem',
  backgroundColor: color.semantic.neutral[900],
  opacity: 0.9,
});

const container = style({
  height: '2.5rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `1px solid ${color.semantic.neutral[800]}`,
  WebkitBackdropFilter: 'blur(18px)',
  backdropFilter: 'blur(18px)',
});

const inner = style({
  zIndex: 1,
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1rem ',
  maxWidth: variables.breakpoint.lg,
});

const nav = style({
  textDecoration: 'none',
  gap: '2rem',
  display: 'flex',
  visibility: 'hidden',

  '@media': {
    [breakpointMediaQuery.sm]: {
      visibility: 'visible',
    },
  },
});

export const styles = {
  container,
  background,
  inner,
  nav,
};
