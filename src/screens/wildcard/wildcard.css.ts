import { style } from '@vanilla-extract/css';

const header = style({
  marginTop: '8rem',
  marginBottom: '2rem',
  padding: '0 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const title = style({
  textAlign: 'center',
  marginBottom: '0.75rem',
});

export const styles = {
  header,
  title,
};
