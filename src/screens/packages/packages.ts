import { html } from '@/dom';
import { container } from '~/components/container';
import { icon } from '~/kernel/icons';
import { inline } from '~/kernel/styles';
import { createRoute } from '~/router';
import { ui } from '~/ui';
import { styles } from './packages.css';

export const packagesRoute = createRoute('/packages')({
  component: () => {
    // const counter = createCounter(10);

    return container({
      variant: 'lg',
      children: html.div(
        html.div(
          { class: styles.header },
          ui.fadeInOnScroll({
            children: html.div(
              {
                style: inline({
                  textAlign: 'center',
                }),
              },
              ui.text({
                type: 'hero',
                children: `Gone are the unexpected errors`,
              })
            ),
          }),
          ui.fadeInOnScroll({
            direction: 'static',
            delay: 'medium',
            children: html.div(
              {
                style: inline({
                  textAlign: 'center',
                }),
              },

              ui.text({
                type: 'subheadline',
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
              { class: styles.download },
              html.p('$ npm i @bmrk/pickle'),
              icon.copy({ size: 18 })
            ),
            html.a(
              {
                class: styles.github,
                href: 'https://github.com/EnzoBomark/pickle',
                target: '_blank',
              },
              icon.github({ size: 18 }),
              html.p('View on GitHub')
            )
          ),
        }),
        ui.fadeInOnScroll({
          overflow: 'visible',
          delay: 'medium',
          children: html.div(
            { class: styles.preview },
            html.div(
              { class: styles.code },
              ui.codeblock({
                code: [
                  {
                    data: `import { Result } from '@bmrk/pickle';

function divide(x: number, by: number): Result<number, string> {
  return by === 0 ? Result.err('Division by zero') : Result.ok(x / by);
}

assert.equal(divide(100, 20).isOk, true);

assert.equal(divide(100, 0).isErr, true);
                  `,
                  },
                ],
              })
            )
          ),
        }),
        ui.fadeInOnScroll({
          delay: 'long',
          children: html.div(
            { class: styles.preview },
            html.div(
              { class: styles.code },
              ui.codeblock({
                code: [
                  {
                    data: `import { Option } from '@bmrk/pickle';

function divide(x: number, by: number): Option<number> {
  return by === 0 ? Option.none : Option.some(x / by);
}

assert.equal(divide(100, 20).isSome, true);

assert.equal(divide(100, 0).isNone, true);
                  `,
                  },
                ],
              })
            )
          ),
        })
      ),
    });
  },
});
