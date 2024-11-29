import { html, state, derive } from '@/bolt';
import { ui } from './kernel/ui';
import { styles } from './styles.css';

function create_counter(initial_value = 0, step = 1) {
  const count = state(initial_value);
  const can_increment = derive(() => count.value < 10);
  const can_decrement = derive(() => count.value > 0);

  const increment = () => can_increment.value && (count.value += step);

  const decrement = () => can_decrement.value && (count.value -= step);

  const reset = () => (count.value = initial_value);

  return {
    count,
    can_increment,
    can_decrement,
    increment,
    decrement,
    reset,
  };
}

export function home() {
  const counter = create_counter(10);

  return html.div(
    { class: styles.container },
    ui.card({
      title: html.div(
        ui.text({ type: 'heading', content: 'Card 1' }),
        ui.text({ content: () => `Count: ${counter.count.value}` })
      ),
      content: html.div(
        { class: styles.content },
        ui.button({
          disabled: () => !counter.can_increment.value,
          onclick: counter.increment,
          label: 'Increment',
        }),
        ui.button({
          disabled: () => !counter.can_decrement.value,
          onclick: counter.decrement,
          label: 'Decrement',
        }),
        ui.button({ onclick: counter.reset, label: 'Reset' })
      ),
      footer: html.div(ui.text({ content: 'Hello' })),
    })
  );
}
