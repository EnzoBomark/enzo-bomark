import { style, styleVariants } from '@vanilla-extract/css';
import { animation, color, variables } from '~/kernel/styles';

const popupBase = style({
  zIndex: 1000,
  pointerEvents: 'none',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.semantic.neutral[925],
  color: color.semantic.neutral[200],
  borderBottom: `1px solid ${color.semantic.neutral[800]}`,
  padding: '0.75rem',
  width: 'calc(100vw - 1.5rem)',
  fontSize: variables.typography.caption.fontSize,
  lineHeight: variables.typography.caption.lineHeight,
});

const popup = styleVariants({
  show: [
    popupBase,
    {
      transition: `transform 1s ${animation.easing.wave}, opacity 0.1s ${animation.easing.wave}`,
      visibility: 'visible',
      transform: 'translateY(0)',
      opacity: 1,
    },
  ],
  hide: [
    popupBase,
    {
      transition: `visibility 0s 0.6s, transform 1s ${animation.easing.wave}, opacity 1s ${animation.easing.wave}`,
      visibility: 'hidden',
      transform: 'translateY(-100%)',
      opacity: 0,
    },
  ],
});

export const styles = {
  popup,
};
