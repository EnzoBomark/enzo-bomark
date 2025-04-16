import hl from './highlight';

import go from './go';
import rust from './rust';
import typescript from './typescript';
import xml from './xml';

export function register() {
  hl.registerLanguage('xml', xml);
  hl.registerLanguage('typescript', typescript);
  hl.registerLanguage('go', go);
  hl.registerLanguage('rust', rust);
}

export function highlight(code, language) {
  if (!['xml', 'typescript', 'go', 'rust'].includes(language)) {
    return code;
  }

  register();
  return hl.highlight(code, { language }).value;
}
