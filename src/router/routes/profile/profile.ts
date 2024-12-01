import { html } from '@/bolt';
import { ui } from '~/kernel/ui';
import { create_route, navigate } from '~/router';

export const profile_route = create_route('/profile/:profile_id/post/:post_id')(
  {
    component: () =>
      html.div(
        ui.text({ type: 'heading', content: 'Profile' }),
        ui.button({
          onclick: () => navigate.back(),
          label: 'Back',
        }),
        ui.link({
          to: '/',
          content: 'Go to home',
        })
      ),
  }
);
