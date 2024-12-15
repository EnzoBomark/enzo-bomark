import { html, State } from '@/dom';
import { classes } from '~/kernel/styles';
import { links } from './links';
import { styles } from './sidebar.css';

type SidebarProps = {
  close: () => void;
  variant: State<'open' | 'closed'>;
};

export function sidebar({ close, variant }: SidebarProps) {
  return html.div(
    { class: styles.container },
    html.div(
      { class: () => classes(styles.sidebar[variant.value]) },
      html.nav({ class: styles.nav }, links({ onclick: close }))
    )
  );
}
