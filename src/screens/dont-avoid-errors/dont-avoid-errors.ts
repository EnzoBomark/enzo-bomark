import { html } from '@/dom';
import { container } from '~/components/container';
import { color, inline } from '~/kernel/styles';
import { createRoute } from '~/router';
import { ui } from '~/ui';

export const dontAvoidErrorsRoute = createRoute('/dont-avoid-errors')({
  component: () =>
    container({
      variant: 'sm',
      children: html.div(
        {
          style: inline({
            padding: '3rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }),
        },
        ui.fadeInOnScroll({
          direction: 'static',
          children: html.h1(
            {
              style: inline({
                fontSize: '3rem',
                fontWeight: '700',
                color: color.semantic.neutral[50],
              }),
            },
            `Don't avoid errors`
          ),
        }),
        ui.fadeInOnScroll({
          delay: 'short',
          children: ui.text({
            type: 'subheadline',
            legibility: 'legible',
            children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque ligula, ultricies et tristique a, dignissim a orci. Nam ac tempus sapien, vel tempor dolor. Mauris tempor ante nulla, a fringilla est tincidunt a. Fusce nibh diam, blandit eu ante sed, consectetur iaculis metus. Sed nec magna sit amet elit dapibus faucibus. Quisque consectetur mattis turpis, ac rhoncus enim ullamcorper eu. Nullam a eros eget purus scelerisque tincidunt. Aliquam tempus massa non sagittis accumsan. Aliquam suscipit, magna vel vehicula posuere, nunc libero auctor nisl, at aliquet ante nisi nec nulla. Praesent aliquam metus et rhoncus facilisis. Nam quis enim aliquet velit condimentum blandit vel in libero. Cras consequat sapien ac massa imperdiet, eu dapibus augue rhoncus. Maecenas nec massa vel neque dictum tincidunt. Suspendisse tincidunt mollis felis ac pulvinar. Phasellus eu blandit magna. Morbi elementum ligula vitae lacus ultrices hendrerit. Vestibulum accumsan ligula sed ornare iaculis. Ut sit amet faucibus neque. Donec at dolor diam. Sed mattis interdum orci sit amet tempor. Phasellus est dui, sagittis vitae tortor at, venenatis ultricies dolor. Morbi quis ante mi. Pellentesque aliquam eu ligula in facilisis. Donec scelerisque rhoncus accumsan. Vestibulum aliquet eleifend dui id tempor. Nam ut feugiat neque. Curabitur non magna tempor, condimentum neque a, consequat turpis. Nulla facilisi.`,
          }),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'medium',
          children: ui.codeblock({
            code: [
              {
                data: `function sum(a: number, b: number): number {
    return a + b;
}
`,
              },
            ],
          }),
        }),
        ui.fadeInOnScroll({
          delay: 'short',
          children: ui.text({
            type: 'subheadline',
            legibility: 'legible',
            children: `Lorem ipsumlegibility: 'legible', dolor sit amet, consectetur adipiscing elit. Vivamus neque ligula, ultricies et tristique a, dignissim a orci. Nam ac tempus sapien, vel tempor dolor. Mauris tempor ante nulla, a fringilla est tincidunt a. Fusce nibh diam, blandit eu ante sed, consectetur iaculis metus. Sed nec magna sit amet elit dapibus faucibus. Quisque consectetur mattis turpis, ac rhoncus enim ullamcorper eu. Nullam a eros eget purus scelerisque tincidunt. Aliquam tempus massa non sagittis accumsan. Aliquam suscipit, magna vel vehicula posuere, nunc libero auctor nisl, at aliquet ante nisi nec nulla. Praesent aliquam metus et rhoncus facilisis. Nam quis enim aliquet velit condimentum blandit vel in libero. Cras consequat sapien ac massa imperdiet, eu dapibus augue rhoncus. Maecenas nec massa vel neque dictum tincidunt. Suspendisse tincidunt mollis felis ac pulvinar. Phasellus eu blandit magna. Morbi elementum ligula vitae lacus ultrices hendrerit. Vestibulum accumsan ligula sed ornare iaculis. Ut sit amet faucibus neque. Donec at dolor diam. Sed mattis interdum orci sit amet tempor. Phasellus est dui, sagittis vitae tortor at, venenatis ultricies dolor. Morbi quis ante mi. Pellentesque aliquam eu ligula in facilisis. Donec scelerisque rhoncus accumsan. Vestibulum aliquet eleifend dui id tempor. Nam ut feugiat neque. Curabitur non magna tempor, condimentum neque a, consequat turpis. Nulla facilisi.`,
          }),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'medium',
          children: ui.codeblock({
            code: [
              {
                data: `function sum(a: number, b: number): number {
    return a + b;
}

`,
              },
              {
                variant: 'highlighted',
                data: `sum(1, 2); // 3`,
              },
            ],
          }),
        }),
        ui.fadeInOnScroll({
          delay: 'short',
          children: ui.text({
            type: 'subheadline',
            legibility: 'legible',
            children: `Lorem ipsumlegibility: 'legible', dolor sit amet, consectetur adipiscing elit. Vivamus neque ligula, ultricies et tristique a, dignissim a orci. Nam ac tempus sapien, vel tempor dolor. Mauris tempor ante nulla, a fringilla est tincidunt a. Fusce nibh diam, blandit eu ante sed, consectetur iaculis metus. Sed nec magna sit amet elit dapibus faucibus. Quisque consectetur mattis turpis, ac rhoncus enim ullamcorper eu. Nullam a eros eget purus scelerisque tincidunt. Aliquam tempus massa non sagittis accumsan. Aliquam suscipit, magna vel vehicula posuere, nunc libero auctor nisl, at aliquet ante nisi nec nulla. Praesent aliquam metus et rhoncus facilisis. Nam quis enim aliquet velit condimentum blandit vel in libero. Cras consequat sapien ac massa imperdiet, eu dapibus augue rhoncus. Maecenas nec massa vel neque dictum tincidunt. Suspendisse tincidunt mollis felis ac pulvinar. Phasellus eu blandit magna. Morbi elementum ligula vitae lacus ultrices hendrerit. Vestibulum accumsan ligula sed ornare iaculis. Ut sit amet faucibus neque. Donec at dolor diam. Sed mattis interdum orci sit amet tempor. Phasellus est dui, sagittis vitae tortor at, venenatis ultricies dolor. Morbi quis ante mi. Pellentesque aliquam eu ligula in facilisis. Donec scelerisque rhoncus accumsan. Vestibulum aliquet eleifend dui id tempor. Nam ut feugiat neque. Curabitur non magna tempor, condimentum neque a, consequat turpis. Nulla facilisi.`,
          }),
        })
      ),
    }),
});
