import { css } from 'styled-components';

export type Header = {
  color?: keyof Theme['color'];
  regular?: boolean;
  align?: 'left' | 'center' | 'right';
  underline?: boolean;
  margin?: keyof Theme['spacing'];
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
};

export const Header = css<Header>`
  font-family: 'NeueHaas';

  color: ${({ color, theme }) =>
    color ? theme.color[color] : theme.color.g1000};

  font-weight: ${({ regular }) => (regular ? 500 : 600)};

  text-align: ${({ align }) => align || 'left'};

  text-decoration-line: ${({ underline }) =>
    underline ? 'underline' : 'none'};

  margin: ${({ margin, theme }) => (margin ? theme.spacing[margin] : '0px')};

  word-spacing: 0.2rem;

  text-transform: ${({ transform }) => transform || 'none'};
`;

export type Regular = {
  color?: keyof Theme['color'];
  bold?: boolean;
  align?: 'left' | 'center' | 'right';
  underline?: boolean;
  margin?: keyof Theme['spacing'];
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
};

export const Regular = css<Regular>`
  font-family: 'NeueHaas';

  color: ${({ color, theme }) =>
    color ? theme.color[color] : theme.color.g1000};

  font-weight: ${({ bold }) => (bold ? 600 : 500)};

  text-align: ${({ align }) => align || 'left'};

  text-decoration-line: ${({ underline }) =>
    underline ? 'underline' : 'none'};

  margin: ${({ margin, theme }) => (margin ? theme.spacing[margin] : '0px')};

  word-spacing: 0.2rem;

  text-transform: ${({ transform }) => transform || 'none'};
`;
