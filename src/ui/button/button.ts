import { Derived, html } from '@/dom';
import { styles } from './button.css';

type ButtonProps = {
  onclick: () => void;
  label: Derived<string>;
  disabled?: Derived<boolean>;
};

export function button({ onclick, disabled, label }: ButtonProps) {
  return html.button({ class: styles.container, disabled, onclick }, label);
}
