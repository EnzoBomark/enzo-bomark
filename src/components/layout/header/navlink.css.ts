import { styleVariants } from '@vanilla-extract/css';
import { animation, color, variables } from '~/kernel/styles';

const link = styleVariants({
  inactive: {
    fontSize: variables.typography.tag.fontSize,
    lineHeight: variables.typography.tag.lineHeight,
    color: color.semantic.neutral[400],
    transition: `color 0.1s ${animation.easing.snappy}`,

    ':hover': {
      color: color.semantic.neutral[200],
    },
  },
  active: {
    fontSize: variables.typography.tag.fontSize,
    lineHeight: variables.typography.tag.lineHeight,
    color: color.semantic.neutral[200],
  },
});

export const styles = {
  link,
};
