import { type Derived, type LinkParams, derive, html, parsePath } from '@/dom';
import { type Paths, navigate } from '~/router';
import { styles } from './styles.css';

type LinkProps = {
  content: Derived<string> | Derived<HTMLElement>;
};

export function link<To extends Paths>(
  props: LinkProps & LinkParams<Paths, To>
) {
  const href = derive(() => parsePath(props));

  const onclick = (e: MouseEvent) => {
    e.preventDefault();
    navigate.go(props);
  };

  return html.a(
    { class: styles.container, href: () => href.value, onclick },
    props.content
  );
}
