import { style } from '@vanilla-extract/css';
import { variables } from '~/kernel/styles';

const container = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  overflow: 'hidden',
});

const inner = style({
  width: '100%',
  maxWidth: `calc(${variables.breakpoint.lg} + 2rem)`,
});

export const styles = { container, inner };
