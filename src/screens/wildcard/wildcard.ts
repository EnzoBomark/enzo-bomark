import { html } from '@/dom';
import { createRoute, navigate } from '~/router';
import { ui } from '~/ui';

export const wildcardRoute = createRoute('*')({
  component: () =>
    html.div(
      ui.text({ type: 'heading', children: '404' }),
      ui.button({
        onclick: () => navigate.go({ to: '/' }),
        label: 'Go to home',
      })
    ),
});
