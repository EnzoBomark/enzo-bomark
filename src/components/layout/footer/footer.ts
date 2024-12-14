import { html } from '@/dom';
import { ui } from '~/ui';
import { styles } from './footer.css';

export function footer() {
  return html.footer(
    { class: styles.container },
    html.div(
      { class: styles.inner },
      ui.row({
        height: '100%',
        justify: 'between',
        children: [
          ui.stack({
            height: '100%',
            justify: 'between',
            children: [
              ui.row({
                gap: 8,
                children: [
                  ui.text({
                    type: 'caption',
                    variant: 'default',
                    children: `Home`,
                  }),
                  ui.text({
                    type: 'caption',
                    variant: 'muted',
                    children: `About`,
                  }),
                  ui.text({
                    type: 'caption',
                    variant: 'muted',
                    children: `Contact`,
                  }),
                ],
              }),
            ],
          }),
          ui.stack({
            height: '100%',
            allign: 'end',
            justify: 'between',
            children: [
              ui.row({
                gap: 8,
                children: [
                  ui.text({
                    type: 'caption',
                    variant: 'muted',
                    children: `GitHub`,
                  }),
                  ui.text({
                    type: 'caption',
                    variant: 'muted',
                    children: `X.com`,
                  }),
                  ui.text({
                    type: 'caption',
                    variant: 'muted',
                    children: `LinkedIn`,
                  }),
                ],
              }),
              ui.text({
                type: 'tag',
                variant: 'muted',
                children: `enzo.boma@hotmail.com`,
              }),
            ],
          }),
        ],
      })
    )
  );
}
