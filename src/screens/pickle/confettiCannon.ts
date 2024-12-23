import { html } from '@/dom';
import { create } from 'canvas-confetti';
import { inline } from '~/kernel/styles';
import { styles } from './pickle.css';

const ID_KEY = 'CONFETTI_CANNON';

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function fire(event: MouseEvent) {
  const canvas = html.canvas({
    class: styles.canvas,
    style: inline({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
    }),
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const screen = document.getElementById(ID_KEY);

  if (!screen) return;

  screen.appendChild(canvas);

  const x = event.x / window.innerWidth;
  const y = event.y / window.innerHeight;

  console.log(x, y);

  const fire = create(canvas);

  fire({
    scalar: randomInRange(0.8, 1),
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { x, y },
  });

  setTimeout(() => {
    screen.removeChild(canvas);
  }, 6000);
}

export const confettiCannon = {
  fire,
  parentId: ID_KEY,
};
