import React from 'react';
import { S } from './Footer.styles';
import { Icon } from 'assets/icons';

export const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterInfo>
          <S.FooterInfoIcon>
            <S.FooterInfoIconItem href="#">
              <Icon unlocked type="LogoWithLogotype" width="16rem" />
            </S.FooterInfoIconItem>
          </S.FooterInfoIcon>

          <S.FooterInfoText>
            Fullstack developer with a passion for building scalable and
            maintainable web applications. I love to learn new technologies and
            share my knowledge with others.
          </S.FooterInfoText>

          <S.FooterInfoSocials>
            <S.FooterInfoSocialsItem href="#">
              <Icon type="GitHub" width="xs" />
            </S.FooterInfoSocialsItem>

            <S.FooterInfoSocialsItem href="#">
              <Icon type="LinkedIn" width="xs" />
            </S.FooterInfoSocialsItem>

            <S.FooterInfoSocialsItem href="#">
              <Icon type="Instagram" width="xs" />
            </S.FooterInfoSocialsItem>

            <S.FooterInfoSocialsItem href="#">
              <Icon type="Medium" width="xs" />
            </S.FooterInfoSocialsItem>
          </S.FooterInfoSocials>
        </S.FooterInfo>

        <S.FooterLinks>
          <S.FooterLinksItem>
            <S.FooterLinksItemTitle>Quick Links</S.FooterLinksItemTitle>

            <S.FooterLinksItemLink href="#">Home</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">About</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">Projects</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">Contact</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">Blog</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">
              Privacy Policy
            </S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">
              Terms of Service
            </S.FooterLinksItemLink>
          </S.FooterLinksItem>

          <S.FooterLinksItem>
            <S.FooterLinksItemTitle>Best Links</S.FooterLinksItemTitle>

            <S.FooterLinksItemLink href="#">Home</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">About</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">Projects</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">Contact</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">Blog</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">
              Privacy Policy
            </S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">
              Terms of Service
            </S.FooterLinksItemLink>
          </S.FooterLinksItem>

          <S.FooterLinksItem>
            <S.FooterLinksItemTitle>Test Links</S.FooterLinksItemTitle>

            <S.FooterLinksItemLink href="#">Home</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">About</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">Projects</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">Contact</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">Blog</S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">
              Privacy Policy
            </S.FooterLinksItemLink>

            <S.FooterLinksItemLink href="#">
              Terms of Service
            </S.FooterLinksItemLink>
          </S.FooterLinksItem>
        </S.FooterLinks>
      </S.FooterContent>

      {/* <S.FooterExtra>
        <S.Detail>© 2021 - All rights reserved</S.Detail>
      </S.FooterExtra> */}
    </S.FooterContainer>
  );
};
