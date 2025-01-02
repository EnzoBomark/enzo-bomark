import { style } from '@vanilla-extract/css';
import { color, variables } from '~/kernel/styles';

const cta = style({
  padding: '1rem',
  display: 'flex',
  flexWrap: 'wrap',
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
  textDecoration: 'none',
  cursor: 'pointer',

  boxShadow: `0 0 10px 5px ${color.semantic.neutral[950]}`,

  transition: 'background-color 0.1s',

  ':hover': {
    backgroundColor: color.semantic.neutral[200],
  },
});

const label = style({
  transform: 'translateY(1px)',
});

export const styles = {
  cta,
  download,
  github,
  label,
};
