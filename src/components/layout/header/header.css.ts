import { style } from '@vanilla-extract/css';

const container = style({
  position: 'sticky',
  top: 0,
  zIndex: 1000,
});

export const styles = {
  container,
};
