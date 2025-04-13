import { style, styleVariants } from '@vanilla-extract/css';
import { breakpointMediaQuery, color } from '~/kernel/styles';

const container = style({
  position: 'relative',
  lineHeight: '1.125',
  wordSpacing: '0.075em',
  border: `1px solid ${color.semantic.neutral[800]}`,
  backgroundColor: color.semantic.neutral[925],
  borderRadius: '0.125rem',
  zIndex: 0,
});

const highlight = style({
  position: 'relative',
  ':before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '-1rem',
    width: 'calc(100% + 2rem)',
    height: '100%',
    backgroundColor: color.semantic.neutral[600],
    opacity: 0.1,
  },
  ':after': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '-1rem',
    width: '100%',
    height: '100%',
    borderLeft: `5px solid ${color.semantic.neutral[500]}`,
    opacity: 0.5,
  },
});

const display = styleVariants({
  block: {
    display: 'block',
  },
  inline: {
    display: 'inline',
  },
});

const details = style({
  display: 'flex',
  gap: '0.5rem',
  padding: '0.5rem',
  opacity: 0.5,
  transition: 'opacity 0.1s',

  justifyContent: 'flex-end',

  selectors: {
    [`${container}:hover &`]: {
      opacity: 1,
    },
  },

  '@media': {
    [breakpointMediaQuery.sm]: {
      position: 'absolute',
      bottom: '0',
      right: '0',
    },
  },
});

const copy = style({
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2.5rem',
  width: '2.5rem',
  backgroundColor: color.semantic.neutral[800],
  color: color.semantic.neutral[100],
  borderRadius: '0.125rem',
  transition: 'background-color 0.1s',

  ':hover': {
    backgroundColor: color.semantic.neutral[700],
  },

  ':active': {
    backgroundColor: color.semantic.neutral[600],
  },
});

const language = style({
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2.5rem',
  padding: '0 0.75rem',
  backgroundColor: color.semantic.neutral[800],
  color: color.semantic.neutral[100],
  borderRadius: '0.125rem',
  transition: 'background-color 0.1s',

  ':hover': {
    backgroundColor: color.semantic.neutral[700],
  },

  ':active': {
    backgroundColor: color.semantic.neutral[600],
  },
});

export const styles = {
  container,
  highlight,
  display,
  copy,
  details,
  language,
};
