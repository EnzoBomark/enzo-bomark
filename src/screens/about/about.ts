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
          ui.fadeInOnScroll({
            direction: 'down',
            delay: 'short',
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
              children: `I started developing video games using C# in 2015. Since 2020, my focus has shifted primarily to creating business software and mobile applications mostly using TypeScript but not limited to it.
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
              children: `This is my personal notebook, where I’ll somewhat seriously attempt to jot down the lessons I’ve learned.
            `,
            }),
          })
        ),
        html.div(
          { class: styles.picture },
          ui.fadeInOnScroll({
            direction: 'static',
            children: html.div(
              { class: styles.image },
              html.img({
                class: styles.img,
                src: '/images/me.png',
                alt: 'Enzo Bomark',
              })
            ),
          })
        ),
        html.div(
          { class: styles.content },
          ui.fadeInOnScroll({
            direction: 'static',
            children: ui.text({
              type: 'subheadline',
              children: `The person you see above is me on a hike — probably my favorite activity alongside programming.
            `,
            }),
          })
        )
      ),
    });
  },
});
