import { html, State } from '@/dom';
import { links } from './links';
import { styles } from './sidebar.css';

type SidebarProps = {
  close: () => void;
  variant: State<'open' | 'closed'>;
};

export function sidebar({ close, variant }: SidebarProps) {
  return html.div(
    html.div(
      { class: () => styles.sidebar[variant.value] },
      html.nav({ class: styles.nav }, links({ onclick: close }))
    )
  );
}
