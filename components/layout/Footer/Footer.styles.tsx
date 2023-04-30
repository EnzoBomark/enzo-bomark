import styled from 'styled-components';
import { S as Styles, mediaSize } from 'styles';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.color.g50};
  color: #fff;
  padding: 1rem;
  text-align: center;

  height: 70rem;
  width: 100vw;

  border-top: 1px solid ${(props) => props.theme.color.g100};
  padding: ${(props) => props.theme.spacing['2xl']};
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: ${mediaSize.l};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing['2xl']};
`;

const FooterInfo = styled.div`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${(props) => props.theme.spacing.m};
  gap: ${(props) => props.theme.spacing.l};
`;

const FooterInfoTitle = styled(Styles.H5)`
  font-weight: 500;
  margin: 0;
`;

const FooterInfoText = styled(Styles.B1)`
  margin: 0;
  color: ${(props) => props.theme.color.g400};
`;

const FooterInfoSocials = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.m};
`;

const FooterInfoSocialsItem = styled.a``;

const FooterInfoIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing.m};
`;

const FooterInfoIconItem = styled.a``;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${(props) => props.theme.spacing.m};
  gap: ${(props) => props.theme.spacing.xl};
`;

const FooterLinksItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 15rem;
  gap: ${(props) => props.theme.spacing.s};
`;

const FooterLinksItemTitle = styled(Styles.H5)`
  font-weight: 500;
  margin: 0;
  margin-bottom: ${(props) => props.theme.spacing.m};
`;

const FooterLinksItemLink = styled(Styles.Anchor)`
  margin: 0;
`;

const FooterExtra = styled.div``;

export const S = {
  ...Styles,
  FooterContainer,
  FooterContent,
  FooterInfo,
  FooterInfoTitle,
  FooterInfoText,
  FooterInfoSocials,
  FooterInfoSocialsItem,
  FooterInfoIcon,
  FooterInfoIconItem,
  FooterLinks,
  FooterLinksItem,
  FooterLinksItemTitle,
  FooterLinksItemLink,
  FooterExtra,
};
