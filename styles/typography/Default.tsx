import { css } from "styled-components";

export interface IHeader {
  color?: keyof Theme["color"];
  regular?: boolean;
  align?: "left" | "center" | "right";
  underline?: boolean;
}

export const Header = css<IHeader>`
  font-family: "UniSans";

  color: ${({ color, theme }) =>
    color ? theme.color[color] : theme.color.g1000};

  font-weight: ${({ regular }) => (regular ? 300 : 700)};

  text-align: ${({ align }) => align || "left"};

  text-decoration-line: ${({ underline }) =>
    underline ? "underline" : "none"};

  margin: 16px;
`;

export interface IRegular {
  color?: keyof Theme["color"];
  bold?: boolean;
  align?: "left" | "center" | "right";
  underline?: boolean;
}

export const Regular = css<IRegular>`
  color: ${({ color, theme }) =>
    color ? theme.color[color] : theme.color.g1000};

  font-weight: ${({ bold }) => (bold ? 700 : 300)};

  text-align: ${({ align }) => align || "left"};

  text-decoration-line: ${({ underline }) =>
    underline ? "underline" : "none"};

  margin: 16px;
`;
