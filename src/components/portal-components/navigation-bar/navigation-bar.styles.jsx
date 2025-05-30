import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const NavigationContainer = styled.header`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  top: 0;
  left: 0;
  z-index: 1000;

  align-items: center;
  padding: 0 10px;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 9px;
  }
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  height: 90%;
  width: auto;
`;

export const LogoImage = styled(Image)`
  object-fit: contain;
  max-height: 100%;
  width: auto;
  height: 100%; /* fill container height */

  @media (max-width: 768px) {
    max-height: 100%;
  }
`;
export const LogoWrapper = styled.div`
  height: 50px;
  width: auto;
  position: relative; /* needed for next/image */
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
