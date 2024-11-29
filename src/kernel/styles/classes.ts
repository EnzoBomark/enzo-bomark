type Class = string | boolean | null | undefined;

export function classes(...args: Class[]): string {
  let str = '';
  let arg: unknown;

  for (let i = 0; i < args.length; i++) {
    if ((arg = args[i]) && typeof arg === 'string') {
      str && (str += ' ');
      str += arg;
    }
  }

  return str;
}
