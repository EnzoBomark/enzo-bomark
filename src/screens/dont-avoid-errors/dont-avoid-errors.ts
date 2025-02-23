import { html } from '@/dom';
import { container } from '~/components/container';
import { color, inline } from '~/kernel/styles';
import { createRoute } from '~/router';
import { ui } from '~/ui';

export const dontAvoidErrorsRoute = createRoute('/dont-avoid-errors')({
  component: () =>
    container({
      variant: 'sm',
      children: html.div(
        {
          style: inline({
            padding: '3rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }),
        },
        ui.fadeInOnScroll({
          children: html.h1(
            {
              style: inline({
                fontSize: '3rem',
                fontWeight: '700',
                color: color.semantic.neutral[50],
              }),
            },
            `Don't avoid errors`
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            {
              style: inline({
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }),
            },
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `JavaScript is one of the most widely used programming languages today. Originally designed to add interactivity to web pages, it has expanded to all fields of development. However, despite its versatility, it may not always be the best fit for every task. One notable drawback of JavaScript is its lack of robust error-handling. Errors are an inevitable part of software development. They should be handled intentionally, but are often thrown carelessly, relying on higher-level boundaries to manage them.`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `The "Error as Value" pattern offers an expressive alternative to traditional exception handling. Treating errors as values, forces developers to handle errors explicitly and think about errors as part of the function's signature.`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `The article will focus on TypeScript from now on.`,
            })
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            {
              style: inline({
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }),
            },
            ui.text({
              type: 'subheading',
              variant: 'muted',
              children: `Exceptions`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Exceptions are a mechanism to interrupt program execution and "jump" to a higher level in the call stack when an error occurs. This is typically managed using try-catch blocks, which allow developers to define boundaries for handling errors. However, effectively using exceptions requires an in-depth understanding of the codebase. Consider the following example:`,
            }),
            ui.codeblock({
              lang: 'typescript',
              code: [
                {
                  data: `function loadConfig(filePath: string): { host: string; port: number } {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const config = JSON.parse(fileContent);
  return { host: config.host, port: config.port };
}

// proceed with the config
`,
                },
              ],
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `In the code above, the loadConfig function might throw an exception if the file isn't found or if the JSON can't be parsed. However, this is not apparent from the function's signature. This lack of explicitness is a common issue with exceptions: they hide important details, making it difficult to reason about potential failure points in the codebase. As a result, developers may introduce uncaught errors.`,
            })
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            {
              style: inline({
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }),
            },
            ui.text({
              type: 'subheading',
              variant: 'muted',
              children: `Errors as Values`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `The Error as Value pattern offers a fundamentally different approach to error handling. Instead of throwing exceptions, functions return errors as explicit values, integrating error states into the function’s signature.`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Many modern languages have adopted the Error as Value pattern, offering insights into its practical implementation:`,
            })
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            {
              style: inline({
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }),
            },
            ui.text({
              type: 'subheading',
              variant: 'muted',
              children: `Go: Using Error Pairs`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Go functions often return a pair consisting of the result and an error, requiring developers to handle both:`,
            }),
            ui.codeblock({
              lang: 'go',
              code: [
                {
                  data: `file, err := os.Open("filename.ext")

if err != nil {
    // Handle the error
}

// Proceed with the file
`,
                },
              ],
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Go’s compiler ensures that unused variables, including errors, cannot be ignored, making error handling a built-in part of the development process.`,
            })
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            {
              style: inline({
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }),
            },
            ui.text({
              type: 'subheading',
              variant: 'muted',
              children: `Rust: Using the Result Enum`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Rust relies on the Result<T, E> enum to make error handling explicit. Developers must explicitly address success (Ok) and failure (Err) states:`,
            }),
            ui.codeblock({
              lang: 'rust',
              code: [
                {
                  data: `let file_result = File::open("filename.ext");

let file = match file_result {
    Ok(file) => {
        // Proceed with the file
    },
    Err(error) => {
        // Handle the error
    }
};
`,
                },
              ],
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Rust’s approach enforces error handling at compile time, ensuring that errors are addressed before the code is run.`,
            })
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            {
              style: inline({
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }),
            },
            ui.text({
              type: 'subheading',
              variant: 'muted',
              children: `How can this be translated to TypeScript?`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `In TypeScript, it is quite simple to start using the Error as Value pattern. Functions can return an error without throwing an exception, allowing callers to handle the error explicitly.`,
            }),
            ui.codeblock({
              lang: 'typescript',
              code: [
                {
                  data: `function loadConfig(
  filePath: string
): { host: string; port: number } | Error } {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const config = JSON.parse(fileContent);
    return { host: config.host, port: config.port };
  } catch (error) {
    return error;
  }
}

const result = loadConfig('config.json');

if (result instanceof Error) {
  // Handle the error
}

// proceed with the config
`,
                },
              ],
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `In this example, the loadConfig function returns either the configuration object or an error. This is a step in the right direction, But it can be improved by providing more context about the error.`,
            }),
            ui.codeblock({
              lang: 'typescript',
              code: [
                {
                  data: `function loadConfig(
  filePath: string
):
  | { success: true; data: { host: string; port: number } }
  | { success: false; error: 'FAILED_TO_LOAD_FILE' | 'FAILED_TO_PARSE_JSON' } {
  let fileContent: string;

  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    return { success: false, error: 'FAILED_TO_LOAD_FILE' };
  }

  let config: { host: string; port: number };

  try {
    config = JSON.parse(fileContent);
  } catch (error) {
    return { success: false, error: 'FAILED_TO_PARSE_JSON' };
  }

  return { success: true, data: { host: config.host, port: config.port } };
}

const result = loadConfig('config.json');

if (result.success === false) {
  // Handle the error
}

// proceed with the config
`,
                },
              ],
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `In this version, the loadConfig function returns an object with a success property indicating whether the operation was successful. If the operation fails, the function returns an object with an error property describing the failure reason. This approach provides more context about the error, making it easier to handle correctly.`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `If you're looking for a structured and expressive approach to error handling in TypeScript, check out my package, @bmrk/pickle. It offers utilities for handling errors in a more functional style. You can find it on npm at @bmrk/pickle`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Here is how pickle can be used:`,
            }),
            ui.codeblock({
              lang: 'typescript',
              code: [
                {
                  data: `import { Result } from '@bmrk/pickle';

function safeReadFileSync(filePath: string) {
  return Result.safe(() => fs.readFileSync(filePath, 'utf-8')
}

function safeParseJson(json: string) {
  return Result.safe(() => JSON.parse(json));
}

function loadConfig(
  filePath: string
): Result<
  { host: string; port: number },
  'FAILED_TO_LOAD_FILE' | 'FAILED_TO_PARSE_JSON'
> {
  return safeReadFileSync(filePath, 'utf-8')
    .mapErr(() => 'FAILED_TO_LOAD_FILE')
    .flatMap(safeParseJson)
    .mapErr(() => 'FAILED_TO_PARSE_JSON')
    .map(({ host, port }) => ({ host, port }));
}
`,
                },
              ],
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `In this example, the Result<T, E> type, similar to Rust, represents the outcome of an operation that may fail. The readFileSync and JSON.parse functions are wrapped and converted into a Result instead of functions that might throw. The Result object provides methods like map, mapErr, and others, enabling a functional approach to chaining operations.`,
            })
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            {
              style: inline({
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }),
            },
            ui.text({
              type: 'subheading',
              variant: 'muted',
              children: `Conclusion`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Effective error handling is a cornerstone of robust software. While exceptions remain the standard error-handling pattern in TypeScript and should be used to catch unexpected or unrecoverable errors, adopting the Error as Value pattern provides a compelling alternative when dealing with expected errors.`,
            })
          ),
        })
      ),
    }),
});
