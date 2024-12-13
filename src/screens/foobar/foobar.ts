import { html } from '@/dom';
import { createRoute } from '~/router';
import { ui } from '~/ui';

export const foobarRoute = createRoute('/foobar/:foo/:bar')({
  component: ({ params }) => {
    return html.div(
      ui.text({
        type: 'heading',
        children: `Foobar, ${params.foo}, ${params.bar}`,
      })
    );
  },
});
