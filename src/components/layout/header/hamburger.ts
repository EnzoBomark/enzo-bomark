import { html, State } from '@/dom';
import { styles } from './hamburger.css';

type HamburgerProps = { toggle: () => void; variant: State<'open' | 'closed'> };

export function hamburger({ toggle, variant }: HamburgerProps) {
  return html.button(
    { class: styles.hamburger, onclick: toggle },
    html.div({ class: () => styles.upper[variant.value] }),
    html.div({ class: () => styles.lower[variant.value] })
  );
}
