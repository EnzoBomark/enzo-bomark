export { createRoute, parsePath } from '@/dom';
import { append, html, router } from '@/dom';
import { layout } from './components/layout';
import { theme } from './kernel/styles';
import { aboutRoute } from './screens/about';
import { contactRoute } from './screens/contact';
import { dontAvoidErrorsRoute } from './screens/dont-avoid-errors';
import { homeRoute } from './screens/home';
import { wildcardRoute } from './screens/wildcard';

export const routes = [
  homeRoute,
  aboutRoute,
  contactRoute,
  dontAvoidErrorsRoute,
  wildcardRoute,
];

export const paths = routes.map(({ path }) => path);

export const navigate = router.navigate<(typeof paths)[number]>();

export const { route } = router(routes.map(({ route }) => route()));

append(
  document.body,
  html.div({ class: theme }, layout({ children: () => route.value }))
);
