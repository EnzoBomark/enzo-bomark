import styled from 'styled-components';
import { UIElements, device, mediaSize } from 'styles';

const HeaderContainer = styled.header<{ isOpen: boolean }>`
  position: fixed;
  width: 100vw;
  height: 4.6rem;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${(props) => props.theme.color.g50}99;
  background-color: ${(props) =>
    props.theme.color.g0 + (props.isOpen ? 'ff' : 'cc')};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  z-index: 100;
`;

const HeaderInner = styled.div`
  position: relative;
  height: 100%;
  max-width: ${mediaSize.xl}px;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const HamburgerWrapper = styled.div`
  position: absolute;
  left: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.m} {
    display: none;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media ${device.m} {
    left: 16px;
    transform: translateX(0);
  }
`;

const NavLinksWrapper = styled.nav`
  display: none;
  height: 100%;

  @media ${device.m} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SpecialLinksWrapper = styled.nav`
  position: absolute;
  right: 16px;

  opacity: 0.8;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const S = {
  ...UIElements,
  HeaderContainer,
  HeaderInner,
  HamburgerWrapper,
  IconWrapper,
  NavLinksWrapper,
  SpecialLinksWrapper,
};
