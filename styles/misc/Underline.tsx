import styled from 'styled-components';
import { addPxSuffix } from 'styles/helpers/addPxSuffix';

type Props = {
  maxWidth?: number | string;
  minWidth?: number | string;
};

export const Underline = styled.div<Props>`
  width: 100%;
  height: 1px;
  align-self: center;
  background-color: ${({ theme }) => theme.color.g300}33;
  max-width: ${(props) => addPxSuffix(props.maxWidth || '100%')};
  min-width: ${(props) => addPxSuffix(props.minWidth || '0px')};
`;
