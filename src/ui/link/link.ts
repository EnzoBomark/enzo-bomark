import { type Derived, type LinkParams, html, parsePath } from '@/dom';
import { navigate, paths } from '~/router';
import { styles } from './link.css';

type LinkProps = {
  children: Derived<string> | Derived<Element>;
};

export function link<To extends (typeof paths)[number]>(
  props: LinkProps & LinkParams<(typeof paths)[number], To>
) {
  const onclick = (e: MouseEvent) => {
    e.preventDefault();
    navigate.go(props);
  };

  return html.a(
    { class: styles.container, href: parsePath(props), onclick },
    props.children
  );
}
