import { html, State } from '@/dom';
import { hamburger } from './hamburger';
import { links } from './links';
import { logo } from './logo';
import { styles } from './navbar.css';

type NavbarProps = {
  variant: State<'open' | 'closed'>;
  toggle: () => void;
  close: () => void;
};

export function navbar({ variant, toggle, close }: NavbarProps) {
  return html.div(
    { class: styles.container },
    html.div({ class: styles.background }),
    html.div(
      { class: styles.inner },
      logo(),
      html.nav({ class: styles.nav }, links({ onclick: close })),
      hamburger({ toggle, variant })
    )
  );
}
