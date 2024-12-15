import { navlink } from './newlink';

type LinkProps = { onclick: () => void };

export function links({ onclick }: LinkProps) {
  return [
    navlink({ path: '/', label: 'Home', onclick }),
    navlink({ path: '/about', label: 'About', onclick }),
    navlink({ path: '/contact', label: 'Contact', onclick }),
    navlink({ path: '/contact', label: 'Packages', onclick }),
  ];
}
