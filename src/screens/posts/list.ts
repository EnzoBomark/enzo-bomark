import { ChildDom, html } from '@/dom';
import { styles } from './list.css';

type ListProps = {
  children: ChildDom;
};

export function list({ children }: ListProps) {
  return html.div(
    { class: styles.container },
    html.div(
      { class: styles.background },
      html.div(
        { class: styles.wrapper },
        html.div({ class: styles.bar.left }),
        html.div({ class: styles.bar.right })
      )
    ),
    html.div({ class: styles.inner }, children)
  );
}
