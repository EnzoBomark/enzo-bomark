import { appendHtmlString, html } from '@/dom';
import { highlight } from '@/highlight';
import { copied } from '~/components/copied';
import { icon } from '~/kernel/icons';
import { classes } from '~/kernel/styles';
import { text } from '../text';
import { styles } from './codeblock.css';

type CodeblockProps = {
  lang: 'go' | 'rust' | 'typescript' | 'none';
  code: Array<{
    data: string;
    type?: 'block' | 'inline';
    variant?: 'highlighted' | 'default';
  }>;
};

export function codeblock({ lang, code }: CodeblockProps) {
  const sections = code.map(({ data, type = 'block', variant = 'default' }) => {
    switch (variant) {
      case 'highlighted':
        return `<span class="${classes(styles.highlight, styles.display[type])}">${highlight(data, lang)}</span>`;
      default:
        return `<span class="${styles.display[type]}">${highlight(data, lang)}</span>`;
    }
  });

  const copyToCodeClipboard = () => {
    navigator.clipboard.writeText(code.map(({ data }) => data).join('\n'));
    copied.trigger();
  };

  const copyLangToClipboard = () => {
    navigator.clipboard.writeText(lang);
    copied.trigger();
  };

  return html.div(
    { class: styles.container },
    html.pre(
      appendHtmlString(
        html.code({ class: classes('highlight') }),
        sections.join('')
      )
    ),
    html.div(
      { class: styles.details },
      html.button(
        { class: styles.copy, onclick: copyToCodeClipboard },
        icon.copy({ size: 16 })
      ),
      lang !== 'none'
        ? html.button(
            { class: styles.language, onclick: copyLangToClipboard },
            text({ children: lang })
          )
        : undefined
    )
  );
}
