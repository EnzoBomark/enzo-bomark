import { html, router } from '@/bolt';
import { home_route } from './routes/home';
import { profile_route } from './routes/profile';
import { wildcard_route } from './routes/wildcard';

export const routes = [home_route, profile_route, wildcard_route];

export const { route } = router(routes.map(({ route }) => route()));

export function router_provider() {
  return html.div(() => route.value);
}
