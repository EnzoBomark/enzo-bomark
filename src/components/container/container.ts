import { ChildDom, html } from '@/dom';
import { styles } from './container.css';

type ContainerProps = {
  children: ChildDom;
};

export function container({ children }: ContainerProps) {
  return html.div(
    { class: styles.container },
    html.div({ class: styles.inner }, children)
  );
}
