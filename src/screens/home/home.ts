import { html } from '@/dom';
import { createRoute } from '~/router';
import { list } from './list';
import { row } from './row';

export const homeRoute = createRoute('/')({
  component: () =>
    list({
      children: html.div(
        row({
          index: 1,
          to: '/dont-avoid-errors',
          label: `Don't avoid errors`,
          date: '2025/03/15',
        }),
        row({
          index: 2,
          to: '/dont-avoid-errors',
          label: `Don't avoid errors`,
          date: '2025/03/15',
        }),
        row({
          index: 3,
          to: '/dont-avoid-errors',
          label: `Don't avoid errors`,
          date: '2025/03/15',
        })
      ),
    }),
});
