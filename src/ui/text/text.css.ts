import { style, styleVariants } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const container = style({});

const variants = styleVariants({
  default: {
    color: color.component.text.default.color,
  },
  muted: {
    color: color.component.text.muted.color,
  },
});

const overflow = styleVariants({
  default: {},
  ellipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

const legibility = styleVariants({
  default: {},
  legible: {
    wordSpacing: '0.1em',
  },
});

const types = styleVariants({
  hero: {
    fontSize: '3rem',
    lineHeight: '3.75rem',
    fontWeight: 700,
  },
  heading: {
    fontSize: '1.75rem',
    lineHeight: '2.25rem',
  },
  subheading: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },
  headline: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
  subheadline: {
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.375rem',
  },
  caption: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  tag: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
  },
});

export const styles = { container, variants, types, overflow, legibility };
