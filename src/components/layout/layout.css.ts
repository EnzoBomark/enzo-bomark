import { style } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const container = style({
  backgroundColor: color.semantic.neutral[950],
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const main = style({
  display: 'flex',
  flexGrow: 1,
});

export const styles = { container, main };
