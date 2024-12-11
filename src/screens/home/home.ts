import { html } from '@/dom';
import { createRoute } from '~/router';
import { ui } from '~/ui';

export const homeRoute = createRoute('/')({
  component: () => {
    return html.div(ui.text({ type: 'heading', children: 'Home' }));
  },
});
