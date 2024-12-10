import { append, html } from '@/dom';
import { layout } from './components/layout';
import { theme } from './kernel/styles';
import { routerProvider } from './router';

append(
  document.body,
  html.div({ class: theme }, layout({ children: routerProvider() }))
);
