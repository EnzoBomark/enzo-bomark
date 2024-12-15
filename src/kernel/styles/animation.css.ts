import { keyframes } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeInUp = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(100%)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeInDown = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-100%)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
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

const slideInUp = keyframes({
  from: {
    transform: 'translateY(100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
});

const slideInDown = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
});

const slideInLeft = keyframes({
  from: {
    transform: 'translateX(-100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
});

const slideInRight = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
});

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const easing = {
  snappy: 'cubic-bezier(0.1, 0.82, 0.76, 0.965)',
  wave: 'cubic-bezier(0.19, 1, 0.22, 1)',
  elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
};

export const animation = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  slideInUp,
  slideInDown,
  slideInLeft,
  slideInRight,
  rotate,
  easing,
};
