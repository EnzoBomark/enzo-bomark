import { style } from '@vanilla-extract/css';
import { color, variables } from '~/kernel/styles';

const header = style({
  marginTop: '8rem',
  marginBottom: '3rem',
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
  all: 'unset',
  display: 'flex',
  gap: '2rem',
  padding: '0.5rem 1rem',
  height: '2rem',
  alignItems: 'center',
  borderRadius: '0.25rem',
  border: `1px solid ${color.semantic.neutral[800]}`,
  color: color.semantic.neutral[200],
  fontSize: variables.typography.body.fontSize,
  lineHeight: variables.typography.body.lineHeight,
  cursor: 'pointer',
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
  fontSize: variables.typography.body.fontSize,
  lineHeight: variables.typography.body.lineHeight,
  cursor: 'pointer',
});

const preview = style({
  margin: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
});

const code = style({
  width: variables.breakpoint.sm,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const styles = {
  header,
  cta,
  download,
  github,
  preview,
  code,
};
