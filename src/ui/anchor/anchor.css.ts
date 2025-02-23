import { style, styleVariants } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const container = style({
  color: color.semantic.neutral[200],
});

const decoration = styleVariants({
  default: {
    textDecoration: 'underline',
  },
  none: {
    textDecoration: 'none',
  },
});

export const styles = {
  container,
  decoration,
};
