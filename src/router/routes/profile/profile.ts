import { html } from '@/bolt';
import { ui } from '~/kernel/ui';
import { create_route, navigate } from '~/router';

export const profile_route = create_route({
  uri: '/profile',
  callback: () =>
    html.div(
      ui.text({ type: 'heading', content: 'Profile' }),
      ui.button({
        onclick: () => navigate.back(),
        label: 'Back',
      }),
      ui.button({
        onclick: () => navigate.go('/'),
        label: 'Go to home',
      }),
      ui.button({
        onclick: () => navigate.go('/dashboard'),
        label: 'Go to dashboard',
      })
    ),
});
