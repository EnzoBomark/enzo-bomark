import { derive, html, state } from '@/dom';
import { ui } from '~/ui';
import { styles } from './codeExample.css';

export function codeExample() {
  const activeExample = state<'basic' | 'throws' | 'async'>('basic');

  const active = (example: 'basic' | 'throws' | 'async') => {
    return activeExample.value === example
      ? styles.button.active
      : styles.button.inactive;
  };

  const setBasic = () => {
    activeExample.value = 'basic';
  };

  const setThrows = () => {
    activeExample.value = 'throws';
  };

  const setAsync = () => {
    activeExample.value = 'async';
  };

  const example = derive(() => {
    switch (activeExample.value) {
      case 'basic':
        return ui.codeblock({
          lang: 'typescript',
          code: [
            {
              data: `import { Result } from '@bmrk/pickle';

function divide(x: number, by: number): Result<number, string> {
  if (by === 0) {
    return Result.err('division by zero');
  }

  return Result.ok(x / by);
}

const result = divide(10, 2)
  // Transform the successful result (Ok) into a more meaningful value
  .map((value) => value * 5)
  // Transform the error result (Err) into a descriptive string
  .mapErr(() => 'Can not divide by zero')
  // Add a side effect for when the operation succeeds
  .effect(() => console.log('divide executed successfully'))
  // Add a side effect for when the operation fails
  .effectErr(() => console.error('divide encountered an error'));

const value = result.okOr(0); // 25
`,
            },
          ],
        });
      case 'throws':
        return ui.codeblock({
          lang: 'typescript',
          code: [
            {
              data: `import { Result } from '@bmrk/pickle';

// A function that might throw an error
function divide(x: number, by: number): number {
  if (by === 0) {
    throw new Error('division by zero');
  }

  return x / by;
}

// Safe wraps a function that might throw an error
`,
            },
            {
              variant: 'highlighted',
              data: `const result = Result.safe(() => divide(10, 2))`,
            },
            {
              data: `// Transform the successful result (Ok) into a more meaningful value
  .map((value) => value * 5)
  // Transform the error result (Err) into a descriptive string
  .mapErr(() => 'unexpected-error')
  // Add a side effect for when the operation succeeds
  .effect(() => console.log('divide executed successfully'))
  // Add a side effect for when the operation fails
  .effectErr(() => console.error('divide encountered an error'));

const value = result.okOr(0); // 25
`,
            },
          ],
        });
      case 'async':
        return ui.codeblock({
          lang: 'typescript',
          code: [
            {
              data: `import { Result } from '@bmrk/pickle';

// A function that returns a Promise that resolves to a Result
async function asyncDivide(x: number, by: number): Promise<Result<number, string>> {
  // Simulate an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (by === 0) {
    return Result.err('division-by-zero');
  }

  return Result.ok(x / by);
}

// AsyncResults offers the same level of control as a standard Result
`,
            },
            {
              variant: 'highlighted',
              data: `const result = Result.async(asyncDivide(10, 2))`,
            },
            {
              data: `// Transform the successful result (Ok) into a more meaningful value
  .map((value) => value * 5)
  // Transform the error result (Err) into a descriptive string
  .mapErr(() => 'Can not divide by zero')
  // Add a side effect for when the operation succeeds
  .effect(() => console.log('asyncDivide executed successfully'))
  // Add a side effect for when the operation fails
  .effectErr(() => console.error('asyncDivide encountered an error'));

`,
            },
            {
              variant: 'highlighted',
              data: `const value = await result.okOr(0); // 25
`,
            },
          ],
        });
    }
  });

  return html.div(
    { class: styles.container },
    ui.fadeInOnScroll({
      overflow: 'visible',
      delay: 'medium',
      children: html.div(
        { class: styles.code },
        html.div(
          { class: styles.features },
          html.button(
            { class: () => active('basic'), onclick: setBasic },
            'Basic usage'
          ),
          html.button(
            { class: () => active('throws'), onclick: setThrows },
            'Handle throws'
          ),
          html.button(
            { class: () => active('async'), onclick: setAsync },
            'Async operations'
          )
        ),
        () => example.value
      ),
    })
  );
}
