import { html, pathname } from '@/dom';
import { paths } from '~/router';
import { ui } from '~/ui';
import { styles } from './navlink.css';

type NavlinkProps = {
  path: (typeof paths)[number];
  label: string;
  onclick: () => void;
};

export function navlink({ path, label, onclick }: NavlinkProps) {
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
