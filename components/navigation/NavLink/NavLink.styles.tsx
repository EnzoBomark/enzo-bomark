import styled from 'styled-components';
import IconChevronDown from 'assets/icons/ChevronDown.svg';
import IconChevronRight from 'assets/icons/ChevronRight.svg';
import { B3 as BaseB3 } from 'styles';

export const ChevronDown = styled(IconChevronDown)`
  position: absolute;
  opacity: 0.4;
  top: calc(50% + 0.9rem);

  left: 50%;
  transform: translateX(-50%);
`;

export const ChevronRight = styled(IconChevronRight)`
  position: absolute;
  left: 0;
  opacity: 0;
  transform: translateX(-1rem);
  transition: 0.2s;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  opacity: 0;
  transform: translateX(-1rem);
  transition: 0.2s;
`;

export const B3 = styled(BaseB3)<{ active: boolean }>`
  font-size: 1.2rem;
  margin: 16px;
  color: ${(props) => props.theme.color.g1000};
  opacity: ${(props) => (props.active ? '100%' : '60%')};
  text-decoration: none;
  transform: translateX(0);
  transition: 0.2s;
`;

export const NavLinkWrapper = styled.a`
  position: relative;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export const NavLink = styled.div`
  position: relative;
  height: 100%;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    ${IconWrapper} {
      opacity: 1;
      transform: translateX(1rem);
    }

    ${IconWrapper} + ${B3} {
      transform: translateX(2.5rem);
    }

    ${ChevronRight} {
      opacity: 1;
      transform: translateX(1rem);
    }

    ${ChevronRight} + ${B3} {
      transform: translateX(2.5rem);
    }
  }
`;

export * from 'styles';
