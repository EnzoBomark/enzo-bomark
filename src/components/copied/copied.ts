import { derive, html, state } from '@/dom';
import { styles } from './copied.css';

let timeout: NodeJS.Timeout;

const show = state(false);

export function copied() {
  const popupVariant = derive(() => (show.value ? 'show' : 'hide'));

  return html.div(
    { class: () => styles.popup[popupVariant.value] },
    'Copied to clipboard!'
  );
}

copied.trigger = () => {
  clearTimeout(timeout);

  show.value = true;

  timeout = setTimeout(() => {
    show.value = false;
  }, 2000);
};
