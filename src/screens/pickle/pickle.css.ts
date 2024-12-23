import { style, styleVariants } from '@vanilla-extract/css';
import { animation, color, variables } from '~/kernel/styles';

const canvas = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
  pointerEvents: 'none',
});

const container = style({
  height: '100%',
  width: '100%',
});

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

const background = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: variables.breakpoint.lg,
  height: variables.breakpoint.lg,
  margin: '0 auto',
});

const vertical = styleVariants({
  one: {
    position: 'absolute',
    top: 0,
    left: '10%',
    width: '1px',
    height: '100%',
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[925]} 50%,  rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  two: {
    position: 'absolute',
    top: 0,
    left: '20%',
    width: '1px',
    height: '100%',
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 50%,  rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  three: {
    position: 'absolute',
    top: 0,
    left: '30%',
    width: '1px',
    height: '100%',
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 50%,  rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  four: {
    position: 'absolute',
    top: 0,
    left: '40%',
    width: '1px',
    height: '100%',
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 50%,  rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  five: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '1px',
    height: '100%',
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 50%,  rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  six: {
    position: 'absolute',
    top: 0,
    left: '60%',
    width: '1px',
    height: '100%',
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 50%,  rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  seven: {
    position: 'absolute',
    top: 0,
    left: '70%',
    width: '1px',
    height: '100%',
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 50%,  rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  eight: {
    position: 'absolute',
    top: 0,
    left: '80%',
    width: '1px',
    height: '100%',
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 50%,  rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  nine: {
    position: 'absolute',
    top: 0,
    left: '90%',
    width: '1px',
    height: '100%',
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[925]} 50%,  rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
});

const horizontal = styleVariants({
  one: {
    position: 'absolute',
    top: '10%',
    left: 0,
    width: '100%',
    height: '1px',
    background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[925]} 20%, ${color.semantic.neutral[925]} 80%, rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  two: {
    position: 'absolute',
    top: '20%',
    left: 0,
    width: '100%',
    height: '1px',
    background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 20%, ${color.semantic.neutral[900]} 80%, rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  three: {
    position: 'absolute',
    top: '30%',
    left: 0,
    width: '100%',
    height: '1px',
    background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 20%, ${color.semantic.neutral[900]} 80%, rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  four: {
    position: 'absolute',
    top: '40%',
    left: 0,
    width: '100%',
    height: '1px',
    background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 20%, ${color.semantic.neutral[900]} 80%, rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  five: {
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '100%',
    height: '1px',
    background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 20%, ${color.semantic.neutral[900]} 80%, rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  six: {
    position: 'absolute',
    top: '60%',
    left: 0,
    width: '100%',
    height: '1px',
    background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 20%, ${color.semantic.neutral[900]} 80%, rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  seven: {
    position: 'absolute',
    top: '70%',
    left: 0,
    width: '100%',
    height: '1px',
    background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 20%, ${color.semantic.neutral[900]} 80%, rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  eight: {
    position: 'absolute',
    top: '80%',
    left: 0,
    width: '100%',
    height: '1px',
    background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[900]} 20%, ${color.semantic.neutral[900]} 80%, rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
  nine: {
    position: 'absolute',
    top: '90%',
    left: 0,
    width: '100%',
    height: '1px',
    background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${color.semantic.neutral[925]} 20%, ${color.semantic.neutral[925]} 80%, rgba(0,0,0,0) 100%);`,

    animation: `${animation.fadeIn} 2s ${animation.easing.snappy} forwards`,
    animationDelay: '1s',
    animationFillMode: 'backwards',
    WebkitAnimationFillMode: 'backwards',
  },
});

const header = style({
  marginTop: '8rem',
  marginBottom: '3rem',
});

const title = style({
  textAlign: 'center',
});

const subtitle = style({
  textAlign: 'center',
});

const cta = style({
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '2rem',
});

const download = style({
  zIndex: 100,
  all: 'unset',
  display: 'flex',
  gap: '2rem',
  padding: '0.5rem 1rem',
  height: '2rem',
  alignItems: 'center',
  borderRadius: '0.25rem',
  border: `1px solid ${color.semantic.neutral[900]}`,
  color: color.semantic.neutral[200],
  fontSize: variables.typography.caption.fontSize,
  lineHeight: variables.typography.caption.lineHeight,
  backgroundColor: color.semantic.neutral[950],
  cursor: 'pointer',

  boxShadow: `0 0 10px 5px ${color.semantic.neutral[950]}`,

  transition: 'color 0.1s',

  ':hover': {
    color: color.semantic.neutral[400],
  },
});

const github = style({
  all: 'unset',
  height: '1.875rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 1rem',
  borderRadius: '0.25rem',
  gap: '0.75rem',
  backgroundColor: color.semantic.neutral[100],
  color: color.semantic.neutral[900],
  fontSize: variables.typography.caption.fontSize,
  lineHeight: variables.typography.caption.lineHeight,
  cursor: 'pointer',

  boxShadow: `0 0 10px 5px ${color.semantic.neutral[950]}`,

  transition: 'background-color 0.1s',

  ':hover': {
    backgroundColor: color.semantic.neutral[200],
  },
});

const preview = style({
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
});

const code = style({
  width: variables.breakpoint.sm,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  boxShadow: `0 0 10px 5px ${color.semantic.neutral[950]}`,
});

export const styles = {
  canvas,
  container,
  popup,
  background,
  vertical,
  horizontal,
  header,
  title,
  subtitle,
  cta,
  download,
  github,
  preview,
  code,
};
