import { style } from '@vanilla-extract/css';
import { breakpointMediaQuery, color, variables } from '~/kernel/styles';

const container = style({
  zIndex: 99999,
  height: '2.5rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `1px solid ${color.semantic.neutral[800]}`,
  WebkitBackdropFilter: 'blur(18px)',
  backdropFilter: 'blur(18px)',
});

const background = style({
  position: 'absolute',
  width: '100%',
  height: '2.5rem',
  backgroundColor: color.semantic.neutral[950],
  opacity: 0.9,
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
  display: 'none',
  fontSize: variables.typography.tag.fontSize,
  lineHeight: variables.typography.tag.lineHeight,

  '@media': {
    [breakpointMediaQuery.sm]: {
      display: 'flex',
    },
  },
});

export const styles = {
  container,
  background,
  inner,
  nav,
};
