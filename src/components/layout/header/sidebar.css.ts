import { style, styleVariants } from '@vanilla-extract/css';
import { breakpointMediaQuery, color } from '~/kernel/styles';

const sidebarBase = style({
  position: 'absolute',
  width: '100%',
  height: 'calc(100vh - 2.5rem)',
  backgroundColor: color.semantic.neutral[900],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
});

const sidebar = styleVariants({
  open: [
    sidebarBase,
    {
      '@media': {
        [breakpointMediaQuery.sm]: {
          display: 'none',
        },
      },
    },
  ],
  closed: {
    display: 'none',
  },
});

const nav = style({
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  marginBottom: '2.5rem',
});

export const styles = {
  sidebar,
  nav,
};
