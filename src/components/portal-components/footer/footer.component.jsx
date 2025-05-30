// src/components/portal-components/portalFooter.jsx
"use client";

import {
  FooterWrapper,
  FooterContainer,
  LinksContainer,
  FooterLink,
  FooterText,
} from "./footer.styles";

const PortalFooter = ({ portal }) => {
  const year = new Date().getFullYear();
  const { name, slug } = portal;

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          &copy; {year} {name}. All rights reserved.
        </FooterText>
        <LinksContainer>
          <FooterLink href={`/${slug}`}>Home</FooterLink>
          <FooterLink href={`/${slug}/products`}>Products</FooterLink>
          <FooterLink href={`/${slug}/account`}>My Account</FooterLink>
          <FooterLink href={`/${slug}/cart`}>Cart</FooterLink>
        </LinksContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default PortalFooter;
