import { style, styleVariants } from '@vanilla-extract/css';
import { animation, breakpointMediaQuery, color } from '~/kernel/styles';

const hamburger = style({
  all: 'unset',
  cursor: 'pointer',
  padding: '10px',
  visibility: 'visible',

  '@media': {
    [breakpointMediaQuery.sm]: {
      visibility: 'hidden',
    },
  },
});

const upperBase = style({
  width: '20px',
  height: '1.5px',
  backgroundColor: color.semantic.neutral[200],
  margin: '6px 0',
  borderRadius: '1px',
  transition: `background-color 0.1s ease-in-out, transform 0.2s ${animation.easing.snappy}`,

  selectors: {
    [`${hamburger}:hover &`]: {
      backgroundColor: color.semantic.neutral[300],
    },
  },
});

const upper = styleVariants({
  open: [
    upperBase,
    {
      transform: 'rotate(45deg) translate(3px, 3px)',
    },
  ],
  closed: [
    upperBase,
    {
      transform: 'rotate(0deg) translate(0px, 0px)',
    },
  ],
});

const lowerBase = style({
  width: '20px',
  height: '1.5px',
  backgroundColor: color.semantic.neutral[200],
  margin: '6px 0',
  borderRadius: '2px',
  transition: `background-color 0.1s ease-in-out, transform 0.2s ${animation.easing.snappy}`,

  selectors: {
    [`${hamburger}:hover &`]: {
      backgroundColor: color.semantic.neutral[300],
    },
  },
});

const lower = styleVariants({
  open: [
    lowerBase,
    {
      transform: 'rotate(-45deg) translate(2px, -2.5px)',
    },
  ],
  closed: [
    lowerBase,
    {
      transform: 'rotate(0deg) translate(0px, px)',
    },
  ],
});

export const styles = {
  hamburger,
  upper,
  lower,
};
