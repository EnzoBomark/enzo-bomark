import { derive, html, state } from '@/dom';
import { ui } from '~/kernel/ui';
import { createRoute } from '~/router';

function createCounter(initial_value = 0, step = 1) {
  const count = state(initial_value);
  const canIncrement = derive(() => count.value < 10);
  const canDecrement = derive(() => count.value > 0);

  const increment = () => canIncrement.value && (count.value += step);

  const decrement = () => canDecrement.value && (count.value -= step);

  const reset = () => (count.value = initial_value);

  return {
    count,
    canIncrement,
    canDecrement,
    increment,
    decrement,
    reset,
  };
}

export const homeRoute = createRoute('/')({
  component: () => {
    const counter = createCounter(10);

    return html.div(
      ui.text({ type: 'heading', content: 'Home' }),
      ui.card({
        title: html.div(
          ui.text({ type: 'heading', content: 'Card 1' }),
          ui.text({ content: () => `Count: ${counter.count.value}` })
        ),
        content: html.div(
          ui.button({
            disabled: () => !counter.canIncrement.value,
            onclick: counter.increment,
            label: 'Increment',
          }),
          ui.button({
            disabled: () => !counter.canDecrement.value,
            onclick: counter.decrement,
            label: 'Decrement',
          }),
          ui.button({ onclick: counter.reset, label: 'Reset' })
        ),
      }),
      ui.link({
        to: '/profile/:profileId/post/:postId',
        params: {
          profileId: counter.count.value.toString(),
          postId: '1',
        },
        content: 'Go to profile',
      })
    );
  },
});
