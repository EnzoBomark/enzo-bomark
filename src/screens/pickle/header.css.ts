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

const beta = style({
  textAlign: 'center',
  width: 'fit-content',
  margin: '0 auto',
  marginTop: '0.75rem',
});

export const styles = {
  header,
  title,
  subtitle,
  beta,
};
