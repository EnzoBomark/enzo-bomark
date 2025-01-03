import { html } from '@/dom';

const { svg, line, polyline } = html('http://www.w3.org/2000/svg');

export function arrowRight({ size = 24 } = {}) {
  return svg(
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    line({ x1: 5, y1: 12, x2: 19, y2: 12 }),
    polyline({ points: '12 5 19 12 12 19' })
  );
}
