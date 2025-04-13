import { html } from '@/dom';
import { container } from '~/components/container';
import { createRoute, navigate } from '~/router';
import { ui } from '~/ui';
import { styles } from './wildcard.css';

export const wildcardRoute = createRoute('*')({
  component: () => {
    return container({
      variant: 'sm',
      children: html.div(
        { class: styles.header },
        ui.fadeInOnScroll({
          children: html.div(
            { class: styles.title },
            ui.text({
              shadow: 'small',
              type: 'hero',
              children: `404 - Not Found`,
            })
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'medium',
          children: ui.button({
            onclick: () => navigate.go({ to: '/' }),
            label: 'Go to home',
          }),
        })
      ),
    });
  },
});
