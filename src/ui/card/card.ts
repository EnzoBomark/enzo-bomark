import { html } from '@/dom';
import { styles } from './card.css';

type CardProps = {
  title?: HTMLElement;
  content?: HTMLElement;
  footer?: HTMLElement;
};

export function card({ title, content, footer }: CardProps) {
  return html.div({ class: styles.container }, title, content, footer);
}
