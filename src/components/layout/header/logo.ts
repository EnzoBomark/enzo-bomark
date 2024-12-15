import { html } from '@/dom';
import { icon } from '~/kernel/icons';
import { ui } from '~/ui';
import { styles } from './logo.css';

export function logo({ size = 36 } = {}) {
  return ui.link({
    to: '/',
    children: html.div({ class: styles.logo }, icon.brand({ size })),
  });
}
