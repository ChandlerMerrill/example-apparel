import styled from "styled-components";

export const Aside = styled.aside`
  width: 16rem;
  min-height: 100svh;
  padding: 1rem;
  background: #f7f7f7;
  border-right: 1px solid #e5e7eb;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const NavLink = styled.a`
  display: block;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  background: ${({ $active }) => ($active ? "#e5e7eb" : "transparent")};
  text-decoration: none;
  color: inherit;
  transition: background 0.15s ease;

  &:hover {
    background: #e5e7eb;
  }
`;
