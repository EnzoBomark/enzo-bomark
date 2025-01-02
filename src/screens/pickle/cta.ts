import { html } from '@/dom';
import { icon } from '~/kernel/icons';
import { ui } from '~/ui';
import { styles } from './cta.css';

type CtaProps = {
  copyToClipboard: (event: MouseEvent) => void;
};

export function cta({ copyToClipboard }: CtaProps) {
  return ui.fadeInOnScroll({
    delay: 'short',
    children: html.div(
      { class: styles.cta },
      html.button(
        { class: styles.download, onclick: copyToClipboard },
        html.p({ class: styles.label }, '$ npm i @bmrk/pickle'),
        icon.copy({ size: 18 })
      ),
      html.a(
        {
          class: styles.github,
          href: 'https://github.com/EnzoBomark/pickle',
          target: '_blank',
        },
        icon.github({ size: 18 }),
        html.p({ class: styles.label }, 'View on GitHub')
      )
    ),
  });
}
