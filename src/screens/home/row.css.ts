import { style } from '@vanilla-extract/css';
import { animation, color } from '~/kernel/styles';

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
  animation: `${animation.fadeInUp} 2s ${animation.easing.wave}`,
  animationFillMode: 'backwards',
  WebkitAnimationFillMode: 'backwards',
});

const date = style({
  animation: `${animation.fadeInRight} 2s ${animation.easing.wave}`,
  animationFillMode: 'backwards',
  WebkitAnimationFillMode: 'backwards',
});

const devider = style({
  position: 'absolute',
  width: '100vw',
  left: '0',
  height: '1px',
  transform: 'translateY(-1px)',
  backgroundColor: color.semantic.neutral[800],

  animation: `${animation.fadeIn} 2s ${animation.easing.wave}`,
  animationFillMode: 'backwards',
  WebkitAnimationFillMode: 'backwards',
});

const icon = style({
  transition: `transform 0.3s ${animation.easing.snappy}`,

  selectors: {
    [`${container}:hover &`]: {
      transform: 'translateX(0.5rem)',
    },
  },
});

export const styles = {
  container,
  devider,
  wrapper,
  label,
  date,
  icon,
};
