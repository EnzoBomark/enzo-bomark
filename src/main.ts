import { html, append } from '@/dom';
import { rootClass } from './kernel/styles';
import { routerProvider } from './router';

function main() {
  return html.main({ class: rootClass }, routerProvider());
}

append(document.body, main());
