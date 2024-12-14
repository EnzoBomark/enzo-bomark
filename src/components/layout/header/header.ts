import { html } from '@/dom';
import { createMenu } from './createMenu';
import { styles } from './header.css';
import { navbar } from './navbar';
import { sidebar } from './sidebar';

export function header() {
  const menu = createMenu();
  return html.header({ class: styles.container }, navbar(menu), sidebar(menu));
}
