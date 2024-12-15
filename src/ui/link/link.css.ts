import { style } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const container = style({
  textDecoration: 'inherit',
  cursor: 'pointer',
  color: color.semantic.neutral[200],
});

export const styles = { container };
