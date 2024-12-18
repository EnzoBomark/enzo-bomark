import { html } from '@/dom';

const { svg, rect, path } = html('http://www.w3.org/2000/svg');

export function copy({ size = 24 } = {}) {
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
    rect({ x: 9, y: 9, width: 13, height: 13, rx: 2, ry: 2 }),
    path({ d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' })
  );
}

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="24"
//   height="24"
//   viewBox="0 0 24 24"
//   fill="none"
//   stroke="currentColor"
//   stroke-width="2"
//   stroke-linecap="round"
//   stroke-linejoin="round"
//   class="feather feather-copy">
//     <rect
//       x="9"
//       y="9"
//       width="13"
//       height="13"
//       rx="2"
//       ry="2">
//     </rect>
//     <path
//       d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1">
//     </path>
//   </svg>