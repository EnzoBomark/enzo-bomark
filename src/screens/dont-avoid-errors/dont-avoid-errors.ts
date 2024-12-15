import { html } from '@/dom';
import { container } from '~/components/container';
import { createRoute } from '~/router';
import { ui } from '~/ui';

export const dontAvoidErrorsRoute = createRoute('/dont-avoid-errors')({
  component: () =>
    container({
      children: html.div(
        ui.text({ type: 'heading', children: 'Don’t avoid errors' })
      ),
    }),
});
