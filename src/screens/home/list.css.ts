import { style, styleVariants } from '@vanilla-extract/css';
import {
  animation,
  breakpointMediaQuery,
  color,
  variables,
} from '~/kernel/styles';

const container = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  overflow: 'hidden',
});

const background = style({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  pointerEvents: 'none',
});

const wrapper = style({
  position: 'absolute',
  height: '100%',
  width: '100%',
  maxWidth: `calc(${variables.breakpoint.lg} + 2rem)`,
});

const inner = style({
  width: '100%',
  maxWidth: `calc(${variables.breakpoint.lg} + 2rem)`,
});

const barBase = style({
  position: 'absolute',
  top: 0,
  width: 1,
  height: '100%',
});

const bar = styleVariants({
  left: [
    barBase,
    {
      left: 0,
      borderLeftWidth: 1,
      borderLeftStyle: 'solid',
      borderLeftColor: 'transparent',
      animation: `${animation.fadeInDown} 2s ${animation.easing.snappy} forwards`,
      transition: 'border-left-color 0.2s',

      '@media': {
        [breakpointMediaQuery.lg]: {
          borderLeftColor: color.semantic.neutral[900],
        },
      },

      ':after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        width: 1,
        height: '10rem',
        background: `linear-gradient(0deg, ${color.semantic.neutral[950]} 0%,  rgba(0,0,0,0) 100%);`,
        transform: 'translateX(-1px)',
      },
    },
  ],
  right: [
    barBase,
    {
      right: 0,
      borderRightWidth: 1,
      borderRightStyle: 'solid',
      borderRightColor: 'transparent',
      animation: `${animation.fadeInDown} 2s ${animation.easing.snappy} forwards`,
      transition: 'border-right-color 0.2s',

      '@media': {
        [breakpointMediaQuery.lg]: {
          borderRightColor: color.semantic.neutral[900],
        },
      },

      ':after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        width: 1,
        height: '10rem',
        background: `linear-gradient(0deg, ${color.semantic.neutral[950]} 0%, rgba(0,0,0,0) 100%);`,
        transform: 'translateX(1px)',
      },
    },
  ],
});

export const styles = { container, background, wrapper, inner, bar };
