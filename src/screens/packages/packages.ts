import { html } from '@/dom';
import { container } from '~/components/container';
import { createRoute } from '~/router';
import { ui } from '~/ui';
import { styles } from './packages.css';

export const packagesRoute = createRoute('/packages')({
  component: () => {
    // const counter = createCounter(10);

    return container({
      variant: 'sm',
      children: html.div(
        { class: styles.header },
        ui.fadeInOnScroll({
          direction: 'static',
          children: ui.text({ type: 'heading', children: `Packages` }),
        })
      ),
    });
  },
});
