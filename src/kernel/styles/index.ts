import './reset.css';
import './font.css';

import { classes } from './classes';
import { colorClass } from './colorTheme.css';
import { variablesClass } from './variables.css';

export { color } from './colorContract.css';
export { animation } from './animation.css';
export { variables, breakpoints, breakpointMediaQuery } from './variables.css';
export { classes } from './classes';

export const rootClass = classes(colorClass, variablesClass);
