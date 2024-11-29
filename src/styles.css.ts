import { style } from '@vanilla-extract/css';
import { color, variables } from './kernel/styles';

const container = style({
  backgroundColor: color.semantic.neutral[900],
  padding: variables.spacing[16],
  height: '100vh',
});

const content = style({
  display: 'flex',
  gap: variables.spacing[4],
});

export const styles = {
  container,
  content,
};
