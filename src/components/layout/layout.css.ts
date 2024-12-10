import { style } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const container = style({
  backgroundColor: color.semantic.neutral[950],
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const styles = { container };
