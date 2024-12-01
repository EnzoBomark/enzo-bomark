import { html } from '@/bolt';
import { ui } from '~/kernel/ui';
import { create_route, navigate } from '~/router';

export const wildcard_route = create_route('*')({
  component: () =>
    html.div(
      ui.text({ type: 'heading', content: '404' }),
      ui.button({
        onclick: () => navigate.go({ to: '/' }),
        label: 'Go to home',
      })
    ),
});
