import { html, Derived } from '@/dom';
import { classes } from '~/kernel/styles';
import { styles } from './styles.css';

type TextProps = {
  content: Derived<string> | Derived<HTMLElement>;
  type?: keyof typeof styles.types;
  variant?: keyof typeof styles.variants;
  overflow?: keyof typeof styles.overflow;
  span?: boolean;
};

export function text({
  content,
  type = 'body',
  variant = 'default',
  overflow = 'default',
  span = false,
}: TextProps) {
  const props = {
    class: classes(
      styles.container,
      styles.types[type],
      styles.variants[variant],
      styles.overflow[overflow]
    ),
  };

  if (span) {
    return html.span(props, content);
  }

  switch (type) {
    case 'heading':
      return html.h1(props, content);
    case 'subheading':
      return html.h2(props, content);
    case 'headline':
      return html.h3(props, content);
    case 'subheadline':
      return html.h4(props, content);
    case 'body':
      return html.p(props, content);
    case 'caption':
      return html.p(props, content);
    case 'tag':
      return html.p(props, content);
  }
}
