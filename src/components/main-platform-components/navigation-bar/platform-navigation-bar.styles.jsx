import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const NavigationContainer = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #e2e2e2;
  z-index: 1000;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 2rem; /* space after logo */
`;

export const LogoImage = styled(Image)`
  object-fit: contain;
  max-height: 90%;
  width: auto;
`;

export const NavLinksLeft = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 25px;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: auto;
    padding: 0;
    justify-content: space-between;
  }
`;
export const NavLinksRight = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 25px;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: auto;
    padding: 0;
    justify-content: space-between;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
  }
`;
export const NavLinkDisabled = styled.span`
  font-weight: 500;
  color: #b0b0b0; /* greyed‑out */
  cursor: not-allowed;
  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
