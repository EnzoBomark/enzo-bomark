import { derive, html, state } from '@/dom';
import { container } from '~/components/container';
import { icon } from '~/kernel/icons';
import { createRoute } from '~/router';
import { ui } from '~/ui';
import { confettiCannon } from './confettiCannon';
import { styles } from './pickle.css';

let timeout: NodeJS.Timeout;

export const pickleRoute = createRoute('/pickle')({
  component: () => {
    const showCopiedPopup = state(false);
    const popupVariant = derive(() =>
      showCopiedPopup.value ? 'show' : 'hide'
    );

    const copyToClipboard = (event: MouseEvent) => {
      clearTimeout(timeout);

      navigator.clipboard.writeText('npm i @bmrk/pickle');
      confettiCannon.fire(event);

      showCopiedPopup.value = true;

      timeout = setTimeout(() => {
        showCopiedPopup.value = false;
      }, 2000);
    };

    return html.div(
      { class: styles.container, id: confettiCannon.parentId },
      html.div(
        { class: () => styles.popup[popupVariant.value] },
        'Copied to clipboard!'
      ),
      container({
        variant: 'lg',
        children: html.div(
          html.div(
            { class: styles.background },
            html.div({ class: styles.vertical.one }),
            html.div({ class: styles.vertical.two }),
            html.div({ class: styles.vertical.three }),
            html.div({ class: styles.vertical.four }),
            html.div({ class: styles.vertical.five }),
            html.div({ class: styles.vertical.six }),
            html.div({ class: styles.vertical.seven }),
            html.div({ class: styles.vertical.eight }),
            html.div({ class: styles.vertical.nine }),

            html.div({ class: styles.horizontal.one }),
            html.div({ class: styles.horizontal.two }),
            html.div({ class: styles.horizontal.three }),
            html.div({ class: styles.horizontal.four }),
            html.div({ class: styles.horizontal.five }),
            html.div({ class: styles.horizontal.six }),
            html.div({ class: styles.horizontal.seven }),
            html.div({ class: styles.horizontal.eight }),
            html.div({ class: styles.horizontal.nine })
          ),
          html.div(
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
                  children: `Write better predictable code with Pickle`,
                })
              ),
            })
          ),
          ui.fadeInOnScroll({
            delay: 'short',
            children: html.div(
              { class: styles.cta },
              html.button(
                { class: styles.download, onclick: copyToClipboard },
                html.p({ class: styles.label }, '$ npm i @bmrk/pickle'),
                icon.copy({ size: 18 })
              ),

              html.a(
                {
                  class: styles.github,
                  href: 'https://github.com/EnzoBomark/pickle',
                  target: '_blank',
                },
                icon.github({ size: 18 }),
                html.p({ class: styles.label }, 'View on GitHub')
              )
            ),
          }),
          html.div(
            { class: styles.preview },
            ui.fadeInOnScroll({
              overflow: 'visible',
              delay: 'medium',
              children: html.div(
                { class: styles.code },
                html.div(
                  { class: styles.features },
                  html.button({ class: styles.button.active }, 'Basic usage'),
                  html.button(
                    { class: styles.button.inactive },
                    'Handle throws'
                  ),
                  html.button(
                    { class: styles.button.inactive },
                    'Async operations'
                  )
                ),
                ui.codeblock({
                  code: [
                    {
                      data: `import { Result } from '@bmrk/pickle';

// A function that might throw an error
function divide(x: number, by: number): number {
  if (by === 0) {
    throw new Error('division by zero');
  }

  return x / by;
}

const result = Result.safe(() => divide(10, 2))
  // Transform the successful result (Ok) into a more meaningful value
  .map((value) => value * 5)
  // Transform the error result (Err) into a descriptive string
  .mapErr(() => 'unexpected-error')
  // Add a side effect for when the operation succeeds
  .effect(() => console.log('mayFail executed successfully'))
  // Add a side effect for when the operation fails
  .effectErr(() => console.error('mayFail encountered an error'));

const value = result.okOr(0); // 25

`,
                    },
                  ],
                })
              ),
            })
          )
        ),
      })
    );
  },
});
