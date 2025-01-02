import { html } from '@/dom';
import { container } from '~/components/container';
import { createRoute } from '~/router';
import { backgroundGrid } from './backgroundGrid';
import { codeExample } from './codeExample';
import { createConfettiCannon } from './createConfettiCannon';
import { createPopup } from './createPopup';
import { cta } from './cta';
import { header } from './header';
import { styles } from './pickle.css';

export const pickleRoute = createRoute('/pickle')({
  component: () => {
    const confettiCannon = createConfettiCannon();
    const popup = createPopup();

    const copyToClipboard = (event: MouseEvent) => {
      navigator.clipboard.writeText('npm i @bmrk/pickle');
      confettiCannon.fire(event);
      popup.trigger();
    };

    return html.div(
      { class: styles.container, id: confettiCannon.parentId },
      popup.component(),
      container({
        variant: 'lg',
        children: html.div(
          backgroundGrid(),
          header(),
          cta({ copyToClipboard }),
          codeExample()
        ),
      })
    );
  },
});
