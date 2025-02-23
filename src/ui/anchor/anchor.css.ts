import { style } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const container = style({
  color: color.semantic.neutral[200],
});

export const styles = {
  container,
};
