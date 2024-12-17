import hl from './highlight';
import typescript from './typescript';

export function register() {
  hl.registerLanguage('typescript', typescript);
}

export function highlight(code, language) {
  hl.registerLanguage('typescript', typescript);
  return hl.highlight(code, { language }).value;
}
