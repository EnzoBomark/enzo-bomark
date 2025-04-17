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
          children: `Gone are the unpredictable exceptions`,
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
        }),
        html.div(
          { class: styles.beta },
          ui.text({
            type: 'caption',
            shadow: 'small',
            variant: 'muted',
            highlight: 'warning',
            children: `Not yet ready for production`,
          })
        )
      ),
    })
  );
}
