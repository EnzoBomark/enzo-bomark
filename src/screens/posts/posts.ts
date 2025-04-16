import { html } from '@/dom';
import { createRoute } from '~/router';
import { list } from './list';
import { row } from './row';

export const postsRoute = createRoute('/')({
  component: () =>
    list({
      children: html.ul(
        row({
          index: 1,
          to: '/stacks-on-stacks',
          label: `Stacks on stacks`,
          date: '2025/04/16',
        }),
        row({
          index: 2,
          to: '/dont-avoid-errors',
          label: `Don't avoid errors`,
          date: '2025/03/15',
        })
      ),
    }),
});
