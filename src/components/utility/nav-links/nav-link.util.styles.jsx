import styled from "styled-components";
export const StyledNavLink = styled.a`
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
  padding: 10px 15px;
  font-weight: 500;
  color: #b0b0b0;
  cursor: not-allowed;
  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 0.875rem;
  }
`;
