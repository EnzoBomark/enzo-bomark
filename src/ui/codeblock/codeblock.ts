import { appendHtmlString, html } from '@/dom';
import { highlight } from '@/highlight';
import { classes } from '~/kernel/styles';
import { styles } from './codeblock.css';

type CodeblockProps = {
  code: Array<{
    data: string;
    type?: 'block' | 'inline';
    variant?: 'highlighted' | 'default';
  }>;
};

export function codeblock({ code }: CodeblockProps) {
  const sections = code.map(({ data, type = 'block', variant = 'default' }) => {
    switch (variant) {
      case 'highlighted':
        return `<span class="${classes(styles.highlight, styles.display[type])}">${highlight(data, 'typescript')}</span>`;
      default:
        return `<span class="${styles.display[type]}">${highlight(data, 'typescript')}</span>`;
    }
  });

  return html.pre(
    appendHtmlString(
      html.code({ class: classes('highlight', styles.container) }),
      sections.join('')
    )
  );
}
