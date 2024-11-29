import { html } from '@/bolt';
import { styles } from './styles.css';

type CardProps = {
  title?: HTMLElement;
  content?: HTMLElement;
  footer?: HTMLElement;
};

export function card({ title, content, footer }: CardProps) {
  return html.div({ class: styles.container }, title, content, footer);
}
