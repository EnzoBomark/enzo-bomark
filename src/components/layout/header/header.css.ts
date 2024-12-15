import { style } from '@vanilla-extract/css';

const container = style({
  position: 'sticky',
  top: 0,
  zIndex: 9999,
});

export const styles = {
  container,
};
