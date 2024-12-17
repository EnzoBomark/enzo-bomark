import { ChildDom, html } from '@/dom';
import { styles } from './container.css';

type ContainerProps = {
  children: ChildDom;
  variant?: 'sm' | 'md' | 'lg' | 'xl';
};

export function container({ children, variant = 'lg' }: ContainerProps) {
  return html.div(
    { class: styles.container },
    html.div({ class: styles.inner[variant] }, children)
  );
}
