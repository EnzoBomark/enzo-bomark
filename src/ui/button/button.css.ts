import { style } from '@vanilla-extract/css';
import { color, variables } from '~/kernel/styles';

const container = style({
  all: 'unset',
  display: 'block',
  padding: [variables.spacing[8], variables.spacing[12]].join(' '),
  borderRadius: variables.spacing[4],
  border: `1px solid ${color.semantic.neutral[800]}`,
  backgroundColor: color.semantic.neutral[925],
  color: color.semantic.neutral[50],
  fontSize: variables.typography.caption.fontSize,
  lineHeight: variables.typography.caption.lineHeight,
  cursor: 'pointer',
});

export const styles = { container };
