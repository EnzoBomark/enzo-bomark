import { style, styleVariants } from '@vanilla-extract/css';
import { color, variables } from '~/kernel/styles';

const container = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

const inner = style({
  position: 'relative',
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
      borderLeft: `1px dashed ${color.semantic.neutral[800]}`,
      transform: 'translateX(-1px)',

      ':after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        width: 1,
        height: '10rem',
        background: `linear-gradient(0deg, ${color.semantic.neutral[950]} -50%, rgba(0,0,0,0) 100%);`,
        transform: 'translateX(-1px)',
      },
    },
  ],
  right: [
    barBase,
    {
      right: 0,
      borderRight: `1px dashed ${color.semantic.neutral[800]}`,
      transform: 'translateX(1px)',

      ':after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        width: 1,
        height: '10rem',
        background: `linear-gradient(0deg, ${color.semantic.neutral[950]} -50%, rgba(0,0,0,0) 100%);`,
        transform: 'translateX(1px)',
      },
    },
  ],
});

export const styles = { container, inner, bar };
