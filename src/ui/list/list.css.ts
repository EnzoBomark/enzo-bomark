import { style } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const list = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  listStyleType: 'none',
  margin: '1rem 0',
});

const item = style({
  position: 'relative',
  paddingLeft: '2rem',
  selectors: {
    '&::before': {
      position: 'absolute',
      top: '0.5rem',
      left: '0.25rem',
      content: '""',
      display: 'block',
      width: '0.5rem',
      height: '0.5rem',
      backgroundColor: color.semantic.neutral[800],
      borderRadius: '1px',
    },
  },
});

export const styles = {
  list,
  item,
};
