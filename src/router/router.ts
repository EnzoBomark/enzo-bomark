import { html, router } from '@/dom';
import { homeRoute } from './routes/home';
import { profileRoute } from './routes/profile';
import { wildcardRoute } from './routes/wildcard';

export const routes = [homeRoute, profileRoute, wildcardRoute];

export const { route } = router(routes.map(({ route }) => route()));

export function routerProvider() {
  return html.div(() => route.value);
}
