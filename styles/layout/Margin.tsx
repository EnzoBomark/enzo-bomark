import styled, { css } from 'styled-components';

export type Margin = {
  spacing?: keyof Theme['spacing'];
  vertical?: keyof Theme['spacing'];
  horizontal?: keyof Theme['spacing'];
  top?: keyof Theme['spacing'];
  bottom?: keyof Theme['spacing'];
  left?: keyof Theme['spacing'];
  right?: keyof Theme['spacing'];
};

export function styledMargin(props: Margin & { theme: Theme }) {
  return css`
    margin-top: ${props.top
      ? props.theme.spacing[props.top]
      : props.vertical
      ? props.theme.spacing[props.vertical]
      : props.spacing
      ? props.theme.spacing[props.spacing]
      : 0};
    margin-bottom: ${props.bottom
      ? props.theme.spacing[props.bottom]
      : props.vertical
      ? props.theme.spacing[props.vertical]
      : props.spacing
      ? props.theme.spacing[props.spacing]
      : 0};
    margin-left: ${props.left
      ? props.theme.spacing[props.left]
      : props.horizontal
      ? props.theme.spacing[props.horizontal]
      : props.spacing
      ? props.theme.spacing[props.spacing]
      : 0};
    margin-right: ${props.right
      ? props.theme.spacing[props.right]
      : props.horizontal
      ? props.theme.spacing[props.horizontal]
      : props.spacing
      ? props.theme.spacing[props.spacing]
      : 0};
  `;
}

export const Margin = styled.span<Margin>`
  ${styledMargin}
`;
