import { style } from '@vanilla-extract/css';
import { animation, color } from '~/kernel/styles';

const row = style({
  listStyle: 'none',
  position: 'relative',
});

const container = style({
  padding: '0.75rem',
  transition: 'background-color 0.2s',

  selectors: {
    '&:hover': {
      backgroundColor: color.semantic.neutral[925],
    },
  },
});

const wrapper = style({
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5rem',
});

const label = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  animation: `${animation.fadeInUp} 1.5s ${animation.easing.wave}`,
  animationFillMode: 'backwards',
  WebkitAnimationFillMode: 'backwards',
});

const date = style({
  animation: `${animation.fadeInRight} 1.5s ${animation.easing.wave}`,
  animationFillMode: 'backwards',
  WebkitAnimationFillMode: 'backwards',
});

const devider = style({
  position: 'absolute',
  width: '100vw',
  left: '0',
  maxHeight: '1px',
  minHeight: '1px',
  transform: 'translateY(-1px)',
  backgroundColor: color.semantic.neutral[800],

  animation: `${animation.fadeIn} 1.5s ${animation.easing.wave}`,
  animationFillMode: 'backwards',
  WebkitAnimationFillMode: 'backwards',
});

const icon = style({
  display: 'flex',
  transition: `transform 0.3s ${animation.easing.snappy}`,

  selectors: {
    [`${container}:hover &`]: {
      transform: 'translateX(0.5rem)',
    },
  },
});

export const styles = {
  row,
  container,
  devider,
  wrapper,
  label,
  date,
  icon,
};
