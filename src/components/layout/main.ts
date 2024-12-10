import { Derived, html } from '@/dom';
import { styles } from './main.css';

type MainProps = {
  children: Derived<Element>;
};

export function main({ children }: MainProps) {
  return html.main({ class: styles.container }, children);
}
