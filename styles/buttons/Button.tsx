import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  all: unset;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.g1000};
  border-radius: 9999px;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.color.g800};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: ${(props) => props.theme.color.g300};
    cursor: not-allowed;
  }
`;

const ButtonLabel = styled.p`
  color: ${(props) => props.theme.color.g0};
  font-size: 1.6rem;
  line-height: 2.2rem;
  transition: color 0.1s ease-in-out;

  ${ButtonContainer}:disabled & {
    color: ${(props) => props.theme.color.g100};
  }
`;

type Props = {
  onClick: () => void;
  disabled?: boolean;
  children: string;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <ButtonContainer onClick={props.onClick} disabled={props.disabled}>
      <ButtonLabel>{props.children}</ButtonLabel>
    </ButtonContainer>
  );
};
