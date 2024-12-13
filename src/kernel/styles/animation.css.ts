import { keyframes } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeInLeft = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-100%)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const fadeInRight = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const cubicBezier = {
  easeInOut: 'cubic-bezier(0.1, 0.82, 0.76, 0.965)',
};

export const animation = {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  rotate,
  cubicBezier,
};
