import { style } from '@vanilla-extract/css';

const header = style({
  marginTop: '8rem',
  marginBottom: '2rem',
  padding: '0 2rem',
});

const title = style({
  textAlign: 'center',
  marginBottom: '0.75rem',
});

const subtitle = style({
  textAlign: 'center',
});

export const styles = {
  header,
  title,
  subtitle,
};
