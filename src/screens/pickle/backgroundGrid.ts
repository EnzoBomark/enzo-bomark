import { html } from '@/dom';
import { styles } from './backgroundGrid.css';

export function backgroundGrid() {
  return html.div(
    { class: styles.background },
    html.div({ class: styles.vertical.one }),
    html.div({ class: styles.vertical.two }),
    html.div({ class: styles.vertical.three }),
    html.div({ class: styles.vertical.four }),
    html.div({ class: styles.vertical.five }),
    html.div({ class: styles.vertical.six }),
    html.div({ class: styles.vertical.seven }),
    html.div({ class: styles.vertical.eight }),
    html.div({ class: styles.vertical.nine }),

    html.div({ class: styles.horizontal.one }),
    html.div({ class: styles.horizontal.two }),
    html.div({ class: styles.horizontal.three }),
    html.div({ class: styles.horizontal.four }),
    html.div({ class: styles.horizontal.five }),
    html.div({ class: styles.horizontal.six }),
    html.div({ class: styles.horizontal.seven }),
    html.div({ class: styles.horizontal.eight }),
    html.div({ class: styles.horizontal.nine })
  );
}
