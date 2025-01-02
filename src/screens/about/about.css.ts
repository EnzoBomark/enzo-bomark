import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '3rem 1.5rem',
});

const header = style({});

const content = style({});

const picture = style({
  margin: '0.5rem 0',
});

const image = style({
  position: 'relative',
  height: '300px',
});

const img = style({
  borderRadius: '0.125rem',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const styles = {
  container,
  header,
  content,
  picture,
  image,
  img,
};
