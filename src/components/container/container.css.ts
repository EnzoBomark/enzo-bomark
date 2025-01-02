import { style, styleVariants } from '@vanilla-extract/css';
import { variables } from '~/kernel/styles';

const container = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  overflow: 'hidden',
});

const inner = styleVariants({
  sm: {
    width: '100%',
    maxWidth: `calc(${variables.breakpoint.sm} + 2rem)`,
  },
  md: {
    width: '100%',
    maxWidth: `calc(${variables.breakpoint.md} + 2rem)`,
  },
  lg: {
    width: '100%',
    maxWidth: `calc(${variables.breakpoint.lg} + 2rem)`,
  },
  xl: {
    width: '100%',
    maxWidth: `calc(${variables.breakpoint.xl} + 2rem)`,
  },
});

export const styles = { container, inner };
