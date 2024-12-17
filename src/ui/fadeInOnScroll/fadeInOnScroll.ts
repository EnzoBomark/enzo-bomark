import { html } from '@/dom';
import { styles } from './fadeInOnScroll.css';

type FadeInOnScrollProps = {
  children: Element;
  direction?: 'up' | 'down' | 'left' | 'right' | 'static';
  delay?: 'none' | 'short' | 'medium' | 'long';
  freezeOnceVisible?: boolean;
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
};

export function fadeInOnScroll({
  children,
  direction = 'up',
  delay = 'none',
  freezeOnceVisible = true,
  threshold,
  rootMargin,
  root,
}: FadeInOnScrollProps) {
  let frozen = false;

  const updateVisibility = ([entry]: IntersectionObserverEntry[]) => {
    if (frozen) {
      return;
    }

    if (entry.isIntersecting) {
      entry.target.classList.remove(styles.direction[direction].hidden);
      entry.target.classList.add(styles.direction[direction].visible);

      if (freezeOnceVisible) {
        frozen = true;
      }
    } else {
      entry.target.classList.remove(styles.direction[direction].visible);
      entry.target.classList.add(styles.direction[direction].hidden);
    }
  };

  const observer = new IntersectionObserver(updateVisibility, {
    threshold: threshold,
    rootMargin: rootMargin,
    root: root,
  });

  children.classList.add(styles.delay[delay]);

  observer.observe(children);

  return html.div({ class: styles.container }, children);
}
