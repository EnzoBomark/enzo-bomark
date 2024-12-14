import { style } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const logo = style({
  color: color.semantic.neutral[200],
  textDecoration: 'none',
  height: '2.25rem',
  overflow: 'hidden',
});

export const styles = {
  logo,
};
