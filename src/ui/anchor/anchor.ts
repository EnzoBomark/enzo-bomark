import { Derived, html } from '@/dom';
import { classes } from '~/kernel/styles';
import { styles } from './anchor.css';

type AnchorProps = {
  children: Derived<string> | Derived<HTMLElement>;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: 'noopener' | 'noreferrer' | 'noopener noreferrer';
  decoration?: keyof typeof styles.decoration;
};

export function anchor({
  children,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  decoration = 'default',
}: AnchorProps) {
  return html.a(
    {
      class: classes(styles.container, styles.decoration[decoration]),
      href,
      target,
      rel,
    },
    children
  );
}
