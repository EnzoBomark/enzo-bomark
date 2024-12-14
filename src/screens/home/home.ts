import { html } from '@/dom';
import { container } from '~/components/container';
import { createRoute } from '~/router';

export const homeRoute = createRoute('/')({
  component: () =>
    container({
      children: html
        .div
        // html.div(
        //   { style: inline({ padding: '1rem' }) },
        //   ui.text({ type: 'heading', children: `Home` })
        // ),
        // html.div({
        //   style: inline({
        //     width: '100%',
        //     height: '1px',
        //     backgroundColor: '#27272a',
        //   }),
        // })
        (),
    }),
});
