import { html } from '@/dom';
import { styles } from './list.css';

type ListProps = {
  items: Element[];
};

export function list({ items }: ListProps) {
  return html.ul(
    { class: styles.list },
    ...items.map((item) => html.li({ class: styles.item }, item))
  );
}
