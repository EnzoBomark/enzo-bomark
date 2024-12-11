import { derive, html, State, state } from '@/dom';
import { classes } from '~/kernel/styles';
import { ui } from '~/ui';
import { styles } from './header.css';
import { logo } from './logo';

function createMenu() {
  const isOpen = state(false);

  const toggle = () => (isOpen.value = !isOpen.value);

  const variant = derive(() => (isOpen.value ? 'open' : 'closed'));

  return { isOpen, toggle, variant };
}

type HamburgerProps = { toggle: () => void; variant: State<'open' | 'closed'> };

function hamburger({ toggle, variant }: HamburgerProps) {
  return html.button(
    { class: styles.hamburger, onclick: toggle },
    html.div({
      class: () => classes(styles.upper, styles.upperVariants[variant.value]),
    }),
    html.div({
      class: () => classes(styles.lower, styles.lowerVariants[variant.value]),
    })
  );
}

function links() {
  return [
    ui.link({
      to: '/',
      children: ui.text({
        type: 'tag',
        variant: 'muted',
        children: 'Home',
      }),
    }),
    ui.link({
      to: '/about',
      children: ui.text({
        type: 'tag',
        variant: 'muted',
        children: 'About',
      }),
    }),
    ui.link({
      to: '/',
      children: ui.text({
        type: 'tag',
        variant: 'muted',
        children: 'Contact',
      }),
    }),
  ];
}

function navigation() {
  return html.nav({ class: styles.nav.horiz }, ...links());
}

type SidebarProps = { variant: State<'open' | 'closed'> };

function sidebar({ variant }: SidebarProps) {
  return html.div(
    { class: () => styles.sidebarVariants[variant.value] },
    html.nav({ class: styles.nav.vert }, ...links())
  );
}

export function header() {
  const menu = createMenu();

  return html.header(
    html.div(
      { class: styles.container },
      logo({ size: 36 }),
      navigation(),
      hamburger(menu)
    ),
    html.div(sidebar(menu))
  );
}
