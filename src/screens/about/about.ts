import { html } from '@/dom';
import { createRoute } from '~/router';
import { ui } from '~/ui';

// function createCounter(initial_value = 0, step = 1) {
//   const count = state(initial_value);
//   const canIncrement = derive(() => count.value < 10);
//   const canDecrement = derive(() => count.value > 0);

//   const increment = () => canIncrement.value && (count.value += step);

//   const decrement = () => canDecrement.value && (count.value -= step);

//   const reset = () => (count.value = initial_value);

//   return {
//     count,
//     canIncrement,
//     canDecrement,
//     increment,
//     decrement,
//     reset,
//   };
// }

export const aboutRoute = createRoute('/about')({
  component: () => {
    // const counter = createCounter(10);

    return html.div(
      ui.text({ type: 'heading', children: `About` })
      // ui.card({
      //   title: html.div(
      //     ui.text({ type: 'heading', children: 'Card 1' }),
      //     ui.text({ children: () => `Count: ${counter.count.value}` })
      //   ),
      //   content: html.div(
      //     ui.button({
      //       disabled: () => !counter.canIncrement.value,
      //       onclick: counter.increment,
      //       label: 'Increment',
      //     }),
      //     ui.button({
      //       disabled: () => !counter.canDecrement.value,
      //       onclick: counter.decrement,
      //       label: 'Decrement',
      //     }),
      //     ui.button({ onclick: counter.reset, label: 'Reset' })
      //   ),
      // })
    );
  },
});
