import { ChildDom, html } from '@/dom';
import { footer } from './footer';
import { header } from './header';
import { styles } from './layout.css';

type LayoutProps = {
  children: ChildDom;
};

export function layout({ children }: LayoutProps) {
  return html.div(
    { class: styles.container },
    header(),
    html.main({ class: styles.main }, children),
    footer()
  );
}
