import { html, LinkParams } from '@/dom';
import { icon } from '~/kernel/icons';
import { inline } from '~/kernel/styles';
import { paths } from '~/router';
import { ui } from '~/ui';
import { styles } from './row.css';

type RowProps = {
  index: number;
  label: string;
  date: string;
};

export function row<To extends (typeof paths)[number]>(
  props: RowProps & LinkParams<(typeof paths)[number], To>
) {
  return html.li(
    { class: styles.row },
    ui.link({
      ...props,
      children: html.div(
        { class: styles.container },
        html.div(
          { class: styles.wrapper },
          html.div(
            {
              style: inline({ animationDelay: `${props.index * 0.1}s` }),
              class: styles.label,
            },
            ui.text({ type: 'body', children: props.label }),
            html.div({ class: styles.icon }, icon.arrowRight({ size: 18 }))
          ),
          html.div(
            {
              style: inline({ animationDelay: `${props.index * 0.1 + 0.2}s` }),
              class: styles.date,
            },
            ui.text({
              type: 'body',
              variant: 'muted',
              children: props.date,
            })
          )
        )
      ),
    }),
    html.div({
      style: inline({ animationDelay: `${props.index * 0.1}s` }),
      class: styles.devider,
    })
  );
}
