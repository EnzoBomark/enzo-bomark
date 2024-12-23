import { html } from '@/dom';
import { container } from '~/components/container';
import { createRoute } from '~/router';
import { ui } from '~/ui';
import { styles } from './about.css';

export const aboutRoute = createRoute('/about')({
  component: () => {
    // const counter = createCounter(10);

    return container({
      variant: 'sm',
      children: html.div(
        { class: styles.header },
        ui.fadeInOnScroll({
          direction: 'static',
          children: ui.text({ type: 'heading', children: `About` }),
        })
      ),
    });
  },
});
