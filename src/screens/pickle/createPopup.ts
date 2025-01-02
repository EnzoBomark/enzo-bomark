import { derive, html, state } from '@/dom';
import { styles } from './createPopup.css';

let timeout: NodeJS.Timeout;

export function createPopup() {
  const showCopiedPopup = state(false);

  const popupVariant = derive(() => (showCopiedPopup.value ? 'show' : 'hide'));

  const trigger = () => {
    clearTimeout(timeout);

    showCopiedPopup.value = true;

    timeout = setTimeout(() => {
      showCopiedPopup.value = false;
    }, 2000);
  };

  const component = () => {
    return html.div(
      { class: () => styles.popup[popupVariant.value] },
      'Copied to clipboard!'
    );
  };

  return { component, trigger };
}
