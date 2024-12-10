import { style } from '@vanilla-extract/css';
import { color, variables } from '~/kernel/styles';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: variables.spacing[4],
  backgroundColor: color.component.card.backgroundColor,
  borderRadius: variables.spacing[4],
  padding: variables.spacing[16],
});

export const styles = { container };
