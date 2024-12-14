import { derive, state } from '@/dom';

export function createMenu() {
  const isOpen = state(false);
  const variant = derive(() => (isOpen.value ? 'open' : 'closed'));

  const toggle = () => {
    return (isOpen.value = !isOpen.value);
  };

  const close = () => {
    return (isOpen.value = false);
  };

  return { variant, toggle, close };
}
