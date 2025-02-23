import hl from './highlight';

import go from './go';
import rust from './rust';
import typescript from './typescript';

export function register() {
  hl.registerLanguage('typescript', typescript);
  hl.registerLanguage('go', go);
  hl.registerLanguage('rust', rust);
}

export function highlight(code, language) {
  register();
  return hl.highlight(code, { language }).value;
}
