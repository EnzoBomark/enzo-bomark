import { html } from '@/dom';
import { ui } from '~/kernel/ui';
import { createRoute, navigate } from '~/router';

export const profileRoute = createRoute('/profile/:profileId/post/:postId')({
  component: ({ params }) => {
    return html.div(
      ui.text({ type: 'heading', content: `Profile ${params.profileId}` }),
      ui.button({
        onclick: () => navigate.back(),
        label: 'Back',
      }),
      ui.link({
        to: '/',
        content: 'Go to home',
      })
    );
  },
});
