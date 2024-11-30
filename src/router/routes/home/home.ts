import { html } from '@/bolt';
import { ui } from '~/kernel/ui';
import { create_route, navigate } from '~/router';

/**
 * rename uri to path
 * rename callback to component
 * add validate query
 *
 * component should receive props
 * - path: string
 * - params: (based on path eg. /:id)
 * - query: based on the zod schema
 */

export const home_route = create_route({
  uri: '/',
  callback: () =>
    html.div(
      ui.text({ type: 'heading', content: 'Home' }),
      ui.button({
        onclick: () => navigate.back(),
        label: 'Back',
      }),
      ui.button({
        onclick: () => navigate.go('/dashboard'),
        label: 'Go to dashboard',
      }),
      ui.button({
        onclick: () => navigate.go('/profile'),
        label: 'Go to profile',
      })
    ),
});
