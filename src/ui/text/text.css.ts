import { style, styleVariants } from '@vanilla-extract/css';
import { color } from '~/kernel/styles';

const container = style({});

const variants = styleVariants({
  default: {
    color: color.component.text.default.color,
  },
  strong: {
    color: color.component.text.strong.color,
  },
  muted: {
    color: color.component.text.muted.color,
  },
});

const shadow = styleVariants({
  default: {},
  small: {
    textShadow: `0 0 10px ${color.semantic.neutral[950]}`,
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
    fontWeight: '700',
  },
  heading: {
    fontSize: '1.75rem',
    lineHeight: '2rem',
  },
  subheading: {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
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

const highlight = styleVariants({
  default: {},
  neutral: {
    whiteSpace: 'nowrap',
    backgroundColor: color.semantic.neutral[800],
    padding: '0.125rem 0.25rem',
    borderRadius: '0.125rem',
    color: color.semantic.neutral[100],
  },
  info: {
    backgroundColor: color.semantic.info[950],
    padding: '0.125rem 0.25rem',
    borderRadius: '0.125rem',
    color: color.semantic.info[100],
  },
  success: {
    backgroundColor: color.semantic.success[950],
    padding: '0.125rem 0.25rem',
    borderRadius: '0.125rem',
    color: color.semantic.success[100],
  },
  warning: {
    backgroundColor: color.semantic.warning[950],
    padding: '0.125rem 0.25rem',
    borderRadius: '0.125rem',
    color: color.semantic.warning[100],
  },
  error: {
    backgroundColor: color.semantic.error[950],
    padding: '0.125rem 0.25rem',
    borderRadius: '0.125rem',
    color: color.semantic.error[100],
  },
  danger: {
    backgroundColor: color.semantic.danger[950],
    padding: '0.125rem 0.25rem',
    borderRadius: '0.125rem',
    color: color.semantic.danger[100],
  },
});

const decoration = styleVariants({
  default: {},
  underline: {
    textDecoration: 'underline',
  },
  strike: {
    textDecoration: 'line-through',
  },
});

const fontStyle = styleVariants({
  default: {},
  italic: {
    fontStyle: 'italic',
  },
});

export const styles = {
  container,
  variants,
  shadow,
  types,
  overflow,
  legibility,
  highlight,
  decoration,
  style: fontStyle,
};
