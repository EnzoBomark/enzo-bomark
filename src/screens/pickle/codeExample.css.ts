import { style, styleVariants } from '@vanilla-extract/css';
import { color, variables } from '~/kernel/styles';

const container = style({
  display: 'flex',
  justifyContent: 'center',
});

const features = style({
  display: 'flex',
  gap: '0.25rem',
});

const buttonBase = style({
  all: 'unset',
  display: 'block',
  padding: [variables.spacing[8], variables.spacing[12]].join(' '),
  borderTopRightRadius: variables.spacing[4],
  borderTopLeftRadius: variables.spacing[4],
  border: `1px solid ${color.semantic.neutral[800]}`,
  backgroundColor: color.semantic.neutral[925],
  color: color.semantic.neutral[200],
  fontSize: variables.typography.caption.fontSize,
  lineHeight: variables.typography.caption.lineHeight,
  cursor: 'pointer',
  zIndex: 100,
  transform: 'translateY(1px)',
});

const button = styleVariants({
  active: [
    buttonBase,
    {
      borderBottom: 'none',
    },
  ],
  inactive: [
    buttonBase,
    {
      color: color.semantic.neutral[500],
      borderBottom: `1px solid ${color.semantic.neutral[800]}`,
    },
  ],
});

const code = style({
  overflow: 'auto',
  maxWidth: variables.breakpoint.sm,
  width: 'calc(100vw - 2rem)',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: `0 0 10px 5px ${color.semantic.neutral[950]}`,
});

export const styles = {
  container,
  features,
  button,
  code,
};
