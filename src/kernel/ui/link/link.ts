import { type Derived, type LinkParams, html, parse_path } from '@/bolt';
import { type Paths, navigate } from '~/router';
import { styles } from './styles.css';

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
    { class: styles.container, href: parse_path(props), onclick },
    props.content
  );
}
