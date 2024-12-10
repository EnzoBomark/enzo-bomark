import { style } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const container = style({
  display: 'flex',
  alignItems: 'center',
  height: '3rem',
  backgroundColor: color.semantic.neutral[900],
});

export const styles = { container };
