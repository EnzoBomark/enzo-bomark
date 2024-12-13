import { derive, html, pathname, State, state } from '@/dom';
import { paths } from '~/router';
import { ui } from '~/ui';
import { styles } from './header.css';
import { logo } from './logo';

function createMenu() {
  const isOpen = state(false);

  const toggle = () => (isOpen.value = !isOpen.value);

  const close = () => (isOpen.value = false);

  const variant = derive(() => (isOpen.value ? 'open' : 'closed'));

  return { isOpen, toggle, close, variant };
}

type HamburgerProps = { toggle: () => void; variant: State<'open' | 'closed'> };

function hamburger({ toggle, variant }: HamburgerProps) {
  return html.button(
    { class: styles.hamburger, onclick: toggle },
    html.div({ class: () => styles.upper[variant.value] }),
    html.div({ class: () => styles.lower[variant.value] })
  );
}

type NavlinkProps = {
  path: (typeof paths)[number];
  label: string;
  onclick: () => void;
};

function navlink({ path, label, onclick }: NavlinkProps) {
  return ui.link({
    to: path,
    children: html.p(
      {
        onclick,
        class: () =>
          pathname.value.split('?')[0] === path
            ? styles.link.active
            : styles.link.inactive,
      },
      label
    ),
  });
}

type LinkProps = { onclick: () => void };

function links({ onclick }: LinkProps) {
  return [
    navlink({ path: '/', label: 'Home', onclick }),
    navlink({ path: '/about', label: 'About', onclick }),
    navlink({ path: '/contact', label: 'Contact', onclick }),
  ];
}

type NavigationProps = { close: () => void };

function navigation({ close }: NavigationProps) {
  return html.nav({ class: styles.nav.horiz }, links({ onclick: close }));
}

type SidebarProps = {
  close: () => void;
  variant: State<'open' | 'closed'>;
};

function sidebar({ close, variant }: SidebarProps) {
  return html.div(
    { class: () => styles.sidebar[variant.value] },
    html.nav({ class: styles.nav.vert }, links({ onclick: close }))
  );
}

function logoLink() {
  return ui.link({
    to: '/',
    children: html.span({ class: styles.logo }, logo({ size: 38 })),
  });
}

export function header() {
  const menu = createMenu();

  return html.header(
    { class: styles.container },
    html.div(
      html.div({ class: styles.background }),
      html.div(
        { class: styles.inner },
        logoLink(),
        navigation(menu),
        hamburger(menu)
      )
    ),
    html.div(sidebar(menu))
  );
}
