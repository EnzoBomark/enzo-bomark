import { style } from '@vanilla-extract/css';
import { color, variables } from '~/kernel/styles';

const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: `1px solid ${color.semantic.neutral[800]}`,
  backgroundColor: color.semantic.neutral[900],
});

const inner = style({
  width: '100%',
  height: '5rem',
  maxWidth: variables.breakpoint.lg,
  padding: '1rem',
});

export const styles = { container, inner };
