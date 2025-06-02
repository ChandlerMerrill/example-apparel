import styled from "styled-components";
import Link from "next/link";

export const Aside = styled.aside`
  width: 18rem;
  min-height: 100svh;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  box-shadow: inset 4px 0 8px rgba(255, 255, 255, 0.8),
    4px 0 8px rgba(0, 0, 0, 0.05);
  border-right: none;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 900;
  margin-bottom: 2rem;
  color: #2c3e50;
  letter-spacing: -0.02em;
  user-select: none;
  text-align: center;
`;

export const NavLink = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.75rem;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  background: ${({ $active }) => ($active ? "#3b82f6" : "transparent")};
  color: ${({ $active }) => ($active ? "white" : "#2c3e50")};
  text-decoration: none;
  box-shadow: ${({ $active }) =>
    $active ? "0 4px 10px rgba(59, 130, 246, 0.4)" : "none"};
  transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease,
    transform 0.15s ease;

  &:hover,
  &:focus-visible {
    background: #2563eb;
    color: white;
    box-shadow: 0 6px 15px rgba(37, 99, 235, 0.5);
    outline: none;
    transform: translateX(4px);
  }
`;
