import { router } from '@/bolt';
import { routes } from './router';

export const paths = routes.map(({ path }) => path);

export type Paths = (typeof paths)[number];

export const navigate = router.navigate<Paths>();
