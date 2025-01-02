import { style } from '@vanilla-extract/css';

const canvas = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  pointerEvents: 'none',
});

const container = style({
  height: '100%',
  width: '100%',
});

export const styles = {
  canvas,
  container,
};
