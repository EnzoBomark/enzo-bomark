import styled, { css } from 'styled-components';
import { S as Styles } from 'styles';

const FadeInOnScrollContainer = styled.div<{
  isVisible: boolean;
}>`
  transition: all 0.9s ease;

  ${({ isVisible }) =>
    isVisible
      ? css`
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          opacity: 0;
          transform: translateY(50px);
        `}
`;

export const S = {
  ...Styles,
  FadeInOnScrollContainer,
};
