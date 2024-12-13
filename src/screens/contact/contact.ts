import { html } from '@/dom';
import { createRoute } from '~/router';
import { ui } from '~/ui';

export const contactRoute = createRoute('/contact')({
  component: () => {
    return html.div(ui.text({ type: 'heading', children: `Contact` }));
  },
});
