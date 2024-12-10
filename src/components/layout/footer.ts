import { html } from '@/dom';
import { styles } from './footer.css';

export function footer() {
  return html.footer({ class: styles.container });
}
