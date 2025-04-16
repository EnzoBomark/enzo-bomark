import { html } from '@/dom';
import { container } from '~/components/container';
import { createRoute } from '~/router';
import { ui } from '~/ui';
import { styles } from './about.css';

export const aboutRoute = createRoute('/about')({
  component: () => {
    return container({
      variant: 'sm',
      children: html.div(
        { class: styles.container },

        html.div(
          { class: styles.header },
          ui.fadeInOnScroll({
            direction: 'static',
            children: ui.text({
              type: 'subheadline',
              children: `Enzo Bomark.`,
            }),
          }),
          html.div(
            { class: styles.picture },
            ui.fadeInOnScroll({
              direction: 'static',
              children: html.div(
                { class: styles.image },
                html.img({
                  class: styles.img,
                  src: '/images/me.jpg',
                  alt: 'Enzo Bomark',
                })
              ),
            })
          ),
          ui.fadeInOnScroll({
            direction: 'down',
            children: ui.text({
              type: 'subheadline',
              variant: 'muted',
              children: `Software Engineer.`,
            }),
          })
        ),

        html.div(
          { class: styles.content },
          ui.fadeInOnScroll({
            direction: 'static',
            children: ui.text({
              type: 'subheadline',
              children: `This is my personal notebook, where I’ll somewhat seriously attempt to jot down some lessons I’ve learned.
            `,
            }),
          })
        ),
        html.div(
          { class: styles.content },
          ui.fadeInOnScroll({
            direction: 'static',
            children: ui.text({
              type: 'subheadline',
              children: html.span(
                `I started developing video games using C# and Unity in 2015. Since 2020, my focus has shifted primarily to creating business software and mobile applications mostly using TypeScript but not limited to it. I’m currently working as a software engineer at `,
                ui.anchor({ href: 'https://qte.se', children: 'qte' }),
                ` in Stockholm, Sweden.`
              ),
            }),
          })
        )
      ),
    });
  },
});
