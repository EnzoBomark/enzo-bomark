import { html, append, router } from '@/bolt';
import { rootClass } from './kernel/styles';
import { ui } from './kernel/ui';

const { route } = router([
  {
    uri: '/',
    callback: () =>
      html.div(
        ui.text({ type: 'heading', content: 'Home' }),
        ui.button({
          onclick: () => router.back(),
          label: 'Back',
        }),
        ui.button({
          onclick: () => router.go('/dashboard'),
          label: 'Go to dashboard',
        }),
        ui.button({
          onclick: () => router.replace('/profile'),
          label: 'Replace to profile',
        })
      ),
  },
  {
    uri: '/dashboard',
    callback: () =>
      html.div(
        ui.text({ type: 'heading', content: 'Dashboard' }),
        ui.button({
          onclick: () => router.back(),
          label: 'Back',
        }),
        ui.button({
          onclick: () => router.go(Math.random() > 0.5 ? '/faulty-route' : '/'),
          label: 'Go to home, may fail',
        })
      ),
  },
  {
    uri: '/profile',
    callback: () =>
      html.div(
        ui.text({ type: 'heading', content: 'Profile' }),
        ui.button({
          onclick: () => router.back(),
          label: 'Back',
        }),
        ui.button({
          onclick: () => router.go('/home'),
          label: 'Go to home',
        })
      ),
  },
  {
    uri: '*',
    callback: () =>
      html.div(
        ui.text({ type: 'heading', content: '404' }),
        ui.button({
          onclick: () => router.go('/'),
          label: 'Go to home',
        })
      ),
  },
]);

function main() {
  return html.main({ class: rootClass }, () => route.value);
}

append(document.body, main());
