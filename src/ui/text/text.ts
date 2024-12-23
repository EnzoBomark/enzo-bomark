import { Derived, html } from '@/dom';
import { classes } from '~/kernel/styles';
import { styles } from './text.css';

type TextProps = {
  children: Derived<string> | Derived<HTMLElement>;
  type?: keyof typeof styles.types;
  variant?: keyof typeof styles.variants;
  overflow?: keyof typeof styles.overflow;
  legibility?: keyof typeof styles.legibility;
  shadow?: keyof typeof styles.shadow;
  span?: boolean;
};

export function text({
  children,
  type = 'body',
  variant = 'default',
  overflow = 'default',
  legibility = 'default',
  shadow = 'default',
  span = false,
}: TextProps) {
  const props = {
    class: classes(
      styles.container,
      styles.types[type],
      styles.variants[variant],
      styles.overflow[overflow],
      styles.legibility[legibility],
      styles.shadow[shadow]
    ),
  };

  if (span) {
    return html.span(props, children);
  }

  switch (type) {
    case 'hero':
      return html.h1(props, children);
    case 'heading':
      return html.h1(props, children);
    case 'subheading':
      return html.h2(props, children);
    case 'headline':
      return html.h3(props, children);
    case 'subheadline':
      return html.h4(props, children);
    case 'body':
      return html.p(props, children);
    case 'caption':
      return html.p(props, children);
    case 'tag':
      return html.p(props, children);
  }
}
