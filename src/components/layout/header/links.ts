import { navlink } from './newlink';

type LinkProps = { onclick: () => void };

export function links({ onclick }: LinkProps) {
  return [
    navlink({ path: '/', label: 'Home', onclick }),
    navlink({ path: '/pickle', label: 'Pickle', onclick }),
    navlink({ path: '/about', label: 'About', onclick }),
  ];
}
