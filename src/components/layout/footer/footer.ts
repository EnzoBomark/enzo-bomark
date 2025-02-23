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
        ui.anchor({
          href: 'https://github.com/EnzoBomark',
          decoration: 'none',
          children: ui.text({
            type: 'tag',
            variant: 'muted',
            children: `GitHub`,
          }),
        }),

        ui.anchor({
          href: 'https://www.linkedin.com/in/enzo-bomark/',
          decoration: 'none',
          children: ui.text({
            type: 'tag',
            variant: 'muted',
            children: `LinkedIn`,
          }),
        })
      )
    )
  );
}
