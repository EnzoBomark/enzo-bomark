import { html } from '@/dom';
import { ui } from '~/kernel/ui';
import { createRoute, navigate } from '~/router';

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
