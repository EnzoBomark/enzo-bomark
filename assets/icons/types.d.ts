declare module '*.svg' {
  import React from 'react';
  type Icon = React.SVGProps<SVGSVGElement> &
    XOR<
      {
        free: boolean;
        width: number | string;
        height: number | string;
      },
      {
        width: '2rem' | '1.5rem' | '1rem' | '0.75rem' | '0.5rem';
        height?: '2rem' | '1.5rem' | '1rem' | '0.75rem' | '0.5rem';
      }
    >;

  const Component: React.FunctionComponent<Icon>;
  export default Component;
}
