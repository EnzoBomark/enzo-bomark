import { style, styleVariants } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const container = style({
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

export const styles = { container, highlight, display };
