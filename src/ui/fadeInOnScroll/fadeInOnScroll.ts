import { html } from '@/dom';
import { classes } from '~/kernel/styles';
import { styles } from './fadeInOnScroll.css';

type FadeInOnScrollProps = {
  children: Element;
  direction?: keyof typeof styles.direction;
  delay?: keyof typeof styles.delay;
  overflow?: keyof typeof styles.overflow;
  freezeOnceVisible?: boolean;
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
};

export function fadeInOnScroll({
  children,
  direction = 'up',
  delay = 'none',
  overflow = 'hidden',
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

  return html.div(
    { class: classes(styles.container, styles.overflow[overflow]) },
    children
  );
}
