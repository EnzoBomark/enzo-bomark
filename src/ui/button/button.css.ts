import { style } from '@vanilla-extract/css';
import { color, variables } from '~/kernel/styles';

const container = style({
  display: 'block',
  padding: variables.spacing[8],
  border: `1px solid ${color.component.card.borderColor}`,
  cursor: 'pointer',
});

export const styles = { container };
