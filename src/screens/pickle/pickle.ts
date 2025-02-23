import { html } from '@/dom';
import { container } from '~/components/container';
import { copied } from '~/components/copied';
import { createRoute } from '~/router';
import { backgroundGrid } from './backgroundGrid';
import { codeExample } from './codeExample';
import { cta } from './cta';
import { header } from './header';
import { styles } from './pickle.css';
import { useConfettiCannon } from './useConfettiCannon';

export const pickleRoute = createRoute('/pickle')({
  component: () => {
    const { fire, parentId } = useConfettiCannon();

    const copyToClipboard = (event: MouseEvent) => {
      navigator.clipboard.writeText('npm i @bmrk/pickle');
      copied.trigger();
      fire(event);
    };

    return html.div(
      { class: styles.container, id: parentId },
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
