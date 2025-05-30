// src/components/store-components/footer.styles.js
import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors?.gray100 || "#f5f5f5"};
  border-top: 1px solid ${({ theme }) => theme.colors?.gray200 || "#e5e5e5"};
  margin-top: 3rem;
  width: 100%;
`;

export const FooterContainer = styled.div`
  max-width: var(--container-width, 1280px);
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterText = styled.p`
  font-size: 0.875rem; /* text-sm */
  color: ${({ theme }) => theme.colors?.gray600 || "#4b5563"};
`;

export const LinksContainer = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const FooterLink = styled(Link)`
  font-size: 0.875rem; /* text-sm */
  color: ${({ theme }) => theme.colors?.gray600 || "#4b5563"};
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors?.primary600 || "#2563eb"};
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: currentColor;
    transition: width 0.2s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }
`;
