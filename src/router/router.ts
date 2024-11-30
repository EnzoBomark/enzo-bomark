import { html, router } from '@/bolt';
import { home_route } from './routes/home';
import { dashboard_route } from './routes/dashboard';
import { profile_route } from './routes/profile';
import { wildcard_route } from './routes/wildcard';

export type Routes = typeof routes;

const routes = [home_route, dashboard_route, profile_route, wildcard_route];

router.init(routes);

export function router_provider() {
  return html.div(() => router.route().value);
}
