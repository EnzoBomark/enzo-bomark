import { html } from '@/bolt';
import { ui } from '~/kernel/ui';
import { create_route, navigate } from '~/router';

export const dashboard_route = create_route({
  uri: '/dashboard',
  callback: () =>
    html.div(
      ui.text({ type: 'heading', content: 'Dashboard' }),
      ui.button({
        onclick: () => navigate.back(),
        label: 'Back',
      }),
      ui.button({
        onclick: () => navigate.go('/'),
        label: 'Go to home',
      }),
      ui.button({
        onclick: () => navigate.go('/profile'),
        label: 'Go to profile',
      })
    ),
});
