import './font.css';
import './reset.css';

import { classes } from './classes';
import { colorClass } from './colorTheme.css';
import { variablesClass } from './variables.css';

export { animation } from './animation.css';
export { classes } from './classes';
export { color } from './colorContract.css';
export { breakpointMediaQuery, breakpoints, variables } from './variables.css';

export const theme = classes(colorClass, variablesClass);
