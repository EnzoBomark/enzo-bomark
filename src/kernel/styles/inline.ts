type InlineProps = {
  [key: string]: string | undefined;
};

export function inline(props: InlineProps) {
  return Object.entries(props)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${convertCaseToDash(key)}: ${value};`)
    .join(' ');
}

function convertCaseToDash(str: string) {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
