import { Derived, html } from '@/dom';
import { footer } from './footer';
import { header } from './header';
import { styles } from './layout.css';
import { main } from './main';

type LayoutProps = {
  children: Derived<Element>;
};

export function layout({ children }: LayoutProps) {
  return html.div(
    { class: styles.container },
    header(),
    main({ children }),
    footer()
  );
}
