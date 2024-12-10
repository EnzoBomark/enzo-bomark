import { style } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const container = style({
  height: '16rem',
  display: 'flex',
  backgroundColor: color.semantic.neutral[900],
});

export const styles = { container };
