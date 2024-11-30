import { html, append } from '@/bolt';
import { rootClass } from './kernel/styles';
import { router_provider } from './router';

function main() {
  return html.main({ class: rootClass }, router_provider());
}

append(document.body, main());
