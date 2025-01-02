import { style, styleVariants } from '@vanilla-extract/css';
import {
  animation,
  breakpointMediaQuery,
  color,
  variables,
} from '~/kernel/styles';

const container = style({
  position: 'relative',
  height: '0px',
});

const sidebarBase = style({
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  gap: '1rem',
  backgroundColor: color.semantic.neutral[925],
  backgroundImage: `radial-gradient(${color.semantic.neutral[900]} 1px, transparent 0)`,
  backgroundSize: '1.5rem 1.5rem',
  backgroundPosition: 'center',
});

const sidebar = styleVariants({
  open: [
    sidebarBase,
    {
      transition: `transform 0.7s ${animation.easing.wave}`,
      visibility: 'visible',
      transform: 'translateY(0)',

      '@media': {
        [breakpointMediaQuery.sm]: {
          display: 'none',
        },
      },
    },
  ],
  closed: [
    sidebarBase,
    {
      transition: `visibility 0s 0.6s, transform 0.7s ${animation.easing.wave}`,
      visibility: 'hidden',
      transform: 'translateY(-100%)',
    },
  ],
});

const nav = style({
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  textAlign: 'center',
  marginBottom: '2.5rem',
  zIndex: 9999,
  fontSize: variables.typography.body.fontSize,
  lineHeight: variables.typography.body.lineHeight,
});

export const styles = {
  container,
  sidebar,
  nav,
};
