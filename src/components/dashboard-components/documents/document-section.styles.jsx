import styled, { css, keyframes } from "styled-components";

const glass = css`
  backdrop-filter: blur(4px) saturate(180%);
  background: rgba(255, 255, 255, 0.6);
`;

export const Section = styled.section`
  ${glass};
  margin-bottom: 2rem;
  border: 1px solid rgba(17, 24, 39, 0.1);
  border-radius: 0.75rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  }
`;

export const Summary = styled.summary`
  cursor: pointer;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme?.colors?.gray900 || "#111827"};
  background: ${({ theme }) => theme?.colors?.gray50 || "#F9FAFB"};
  user-select: none;
  transition: background 0.25s ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme?.colors?.gray100 || "#F3F4F6"};
    outline: none;
  }

  /* Reset summary styles if you keep semantic summary element */
  list-style: none;
  &::marker,
  &::-webkit-details-marker {
    display: none;
  }
`;

/* Icon that rotates based on open state */
export const ToggleIcon = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-right: 2px solid ${({ theme }) => theme?.colors?.gray700 || "#374151"};
  border-bottom: 2px solid ${({ theme }) => theme?.colors?.gray700 || "#374151"};
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(-45deg)")};
  transition: transform 0.25s ease;
  margin-left: 0.5rem;
  pointer-events: none; /* So clicks pass through */
`;

/* ... keep your existing styled components below ... */

export const FileList = styled.ul`
  padding: 1rem 1.25rem 1.5rem;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const FileRow = styled.li`
  background: ${({ theme }) => theme?.colors?.white || "#ffffff"};
  border: 1px solid ${({ theme }) => theme?.colors?.gray200 || "#e5e7eb"};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme?.colors?.gray50 || "#f9fafb"};
    transform: translateY(-2px);
  }
`;

export const FileName = styled.p`
  font-weight: 500;
  font-size: 0.95rem;
  color: ${({ theme }) => theme?.colors?.gray800 || "#374151"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 0.75rem;
  flex: 1;
`;

export const FileLink = styled.a`
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme }) => theme?.colors?.primary || "#2563eb"};
  text-decoration: none;
  flex-shrink: 0;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme?.colors?.primaryDark || "#1e3a8a"};
    text-decoration: underline;
    outline: none;
  }
`;
