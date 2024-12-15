import { style } from '@vanilla-extract/css';
import { animation, variables } from '~/kernel/styles';

const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
});

const inner = style({
  width: '100%',
  maxWidth: variables.breakpoint.lg,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '1rem',
});

const social = style({
  display: 'flex',
  gap: '1rem',

  animation: `${animation.fadeInUp} 2s ${animation.easing.wave}`,
  animationFillMode: 'backwards',
  animationDelay: '0.5s',
  WebkitAnimationFillMode: 'backwards',
});

export const styles = {
  container,
  inner,
  social,
};
