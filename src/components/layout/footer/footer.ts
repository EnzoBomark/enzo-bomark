import { html } from '@/dom';
import { ui } from '~/ui';
import { styles } from './footer.css';

export function footer() {
  return html.footer(
    { class: styles.container },
    html.div(
      { class: styles.inner },
      html.div(
        { class: styles.social },
        ui.text({
          type: 'tag',
          variant: 'muted',
          children: `GitHub`,
        }),
        // ui.text({
        //   type: 'tag',
        //   variant: 'muted',
        //   children: `X.com`,
        // }),
        ui.text({
          type: 'tag',
          variant: 'muted',
          children: `LinkedIn`,
        })
      )
    )
  );
}
