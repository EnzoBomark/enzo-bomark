import { html } from '@/dom';
import { createRoute, navigate } from '~/router';
import { ui } from '~/ui';

export const wildcardRoute = createRoute('*')({
  component: () =>
    html.div(
      ui.text({ type: 'heading', content: '404' }),
      ui.button({
        onclick: () => navigate.go({ to: '/' }),
        label: 'Go to home',
      })
    ),
});
