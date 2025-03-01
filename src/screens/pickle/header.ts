import { html } from '@/dom';
import { ui } from '~/ui';
import { styles } from './header.css';

export function header() {
  return html.div(
    { class: styles.header },
    ui.fadeInOnScroll({
      children: html.div(
        { class: styles.title },
        ui.text({
          shadow: 'small',
          type: 'hero',
          children: `Gone are the unexpected errors`,
        })
      ),
    }),
    ui.fadeInOnScroll({
      direction: 'static',
      delay: 'medium',
      children: html.div(
        { class: styles.subtitle },
        ui.text({
          type: 'subheadline',
          shadow: 'small',
          variant: 'muted',
          children: `Write better, predictable code with Pickle`,
        })
      ),
    })
  );
}
