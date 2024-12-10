import { type Derived, type LinkParams, html, parsePath } from '@/dom';
import { type Paths, navigate } from '~/router';
import { styles } from './link.css';

type LinkProps = {
  content: Derived<string> | Derived<HTMLElement>;
};

export function link<To extends Paths>(
  props: LinkProps & LinkParams<Paths, To>
) {
  const onclick = (e: MouseEvent) => {
    e.preventDefault();
    navigate.go(props);
  };

  return html.a(
    { class: styles.container, href: parsePath(props), onclick },
    props.content
  );
}
