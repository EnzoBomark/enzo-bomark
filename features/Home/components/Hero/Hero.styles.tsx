import styled, { keyframes } from 'styled-components';
import { S as Styles } from 'styles';

const HeroContainer = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 4.6rem);
  background-color: ${(props) => props.theme.color.g25};
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroInnerContainer = styled.div`
  width: 100vw;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

const Bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.6rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const BounceArrowContainer = styled.div`
  position: absolute;
  bottom: 2.4rem;

  transition: transform 0.2s ease;

  & > svg {
    animation: ${Bounce} 1.5s ease infinite;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-0.8rem) scale(1.6);

    & > svg {
      animation: ${Bounce} 3s ease infinite;
    }
  }
`;

export const S = {
  ...Styles,
  HeroContainer,
  HeroInnerContainer,
  BounceArrowContainer,
};
