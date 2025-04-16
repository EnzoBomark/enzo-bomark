import { style } from '@vanilla-extract/css';

const content = style({
  padding: '3rem 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
});

const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const block = style({
  padding: '0.5rem 0',
});

export const styles = {
  content,
  section,
  block,
};
