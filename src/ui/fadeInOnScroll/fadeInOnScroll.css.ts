import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { animation } from '~/kernel/styles';

const container = style({
  position: 'relative',
  overflow: 'hidden',
});

const fadeInUp = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeOutDown = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeInDown = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeOutUp = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeInRight = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeOutRight = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeInLeft = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeOutLeft = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeOut = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const direction = {
  up: styleVariants({
    visible: {
      animation: `${fadeInUp} 2s ${animation.easing.wave}`,
      animationFillMode: 'backwards',
      WebkitAnimationFillMode: 'backwards',
    },
    hidden: {
      animation: `${fadeOutDown} 2s ${animation.easing.wave}`,
      animationFillMode: 'backwards',
      WebkitAnimationFillMode: 'backwards',
    },
  }),
  down: styleVariants({
    visible: {
      animation: `${fadeInDown} 2s ${animation.easing.wave}`,
      animationFillMode: 'backwards',
      WebkitAnimationFillMode: 'backwards',
    },
    hidden: {
      animation: `${fadeOutUp} 2s ${animation.easing.wave}`,
      animationFillMode: 'backwards',
      WebkitAnimationFillMode: 'backwards',
    },
  }),
  right: styleVariants({
    visible: {
      animation: `${fadeInRight} 2s ${animation.easing.wave}`,
      animationFillMode: 'backwards',
      WebkitAnimationFillMode: 'backwards',
    },
    hidden: {
      animation: `${fadeOutRight} 2s ${animation.easing.wave}`,
      animationFillMode: 'backwards',
      WebkitAnimationFillMode: 'backwards',
    },
  }),
  left: styleVariants({
    visible: {
      animation: `${fadeInLeft} 2s ${animation.easing.wave}`,
      animationFillMode: 'backwards',
      WebkitAnimationFillMode: 'backwards',
    },
    hidden: {
      animation: `${fadeOutLeft} 2s ${animation.easing.wave}`,
      animationFillMode: 'backwards',
      WebkitAnimationFillMode: 'backwards',
    },
  }),
  static: styleVariants({
    visible: {
      animation: `${fadeIn} 2s ${animation.easing.wave}`,
      animationFillMode: 'backwards',
      WebkitAnimationFillMode: 'backwards',
    },
    hidden: {
      animation: `${fadeOut} 2s ${animation.easing.wave}`,
      animationFillMode: 'backwards',
      WebkitAnimationFillMode: 'backwards',
    },
  }),
};

const delay = styleVariants({
  none: {
    animationDelay: '0s',
  },
  short: {
    animationDelay: '0.2s',
  },
  medium: {
    animationDelay: '0.4s',
  },
  long: {
    animationDelay: '0.6s',
  },
});

export const styles = { container, direction, delay };
