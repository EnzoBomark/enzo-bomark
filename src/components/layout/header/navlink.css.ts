import { styleVariants } from '@vanilla-extract/css';
import { animation, color } from '~/kernel/styles';

const link = styleVariants({
  inactive: {
    color: color.semantic.neutral[400],
    transition: `color 0.1s ${animation.easing.snappy}`,

    ':hover': {
      color: color.semantic.neutral[200],
    },
  },
  active: {
    color: color.semantic.neutral[200],
  },
});

export const styles = {
  link,
};
