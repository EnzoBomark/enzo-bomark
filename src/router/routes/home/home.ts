import { html } from '@/bolt';
import { ui } from '~/kernel/ui';
import { create_route } from '~/router/create_route';

/**
 * add validate query
 *
 * component should receive props
 * - path: string
 * - params: (based on path eg. /:id)
 * - query: based on the zod schema
 */

export const home_route = create_route('/')({
  component: () =>
    html.div(
      ui.text({ type: 'heading', content: 'Home' }),
      ui.link({
        to: '/profile/:profile_id/post/:post_id',
        params: { profile_id: '1337', post_id: '69' },
        content: 'Go to profile',
      })
    ),
});
