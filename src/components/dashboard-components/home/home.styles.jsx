// app/components/dashboard-components/home/home.styles.jsx
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem; /* equivalent to text-2xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 1rem; /* mb-4 */
`;

export const Description = styled.p`
  margin-bottom: 1.5rem; /* mb-6 */
  color: #4a5568; /* Tailwind text-gray-700 */
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  border: 1px solid #e5e7eb; /* Tailwind border */
  padding: 1rem; /* p-4 */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* shadow */
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f9fafb; /* hover:bg-gray-50 */
  }
`;

export const CardTitle = styled.h2`
  font-weight: 600; /* font-semibold */
  font-size: 1.125rem; /* text-lg */
  margin-bottom: 0.25rem;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem; /* text-sm */
  color: #4b5563; /* text-gray-600 */
`;
