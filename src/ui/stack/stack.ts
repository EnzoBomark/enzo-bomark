import { ChildDom, html } from '@/dom';
import { inline, variables } from '~/kernel/styles';
import { styles } from './stack.css';

type StackProps = {
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  height?: number | string;
  width?: number | string;
  reverse?: boolean;
  gap?: keyof typeof variables.spacing;
  allign?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between';
  wrap?: 'wrap' | 'nowrap';
  children: ChildDom;
};

export function stack({
  flex,
  flexGrow,
  flexShrink,
  height,
  width,
  reverse = false,
  gap = 4,
  allign = 'start',
  justify = 'start',
  wrap = 'wrap',
  children,
}: StackProps) {
  const alignment = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
  };

  return html.div(
    {
      class: styles.container,
      style: inline({
        flex,
        flexGrow,
        flexShrink,
        height,
        width,
        flexDirection: reverse ? 'column-reverse' : 'column',
        gap: variables.spacing[gap],
        alignItems: alignment[allign],
        justifyContent: alignment[justify],
        flexWrap: wrap,
      }),
    },
    children
  );
}
