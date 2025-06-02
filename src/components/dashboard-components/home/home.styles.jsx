import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Title = styled.h1`
  font-size: 3rem; /* Bigger, more commanding */
  font-weight: 900;
  color: #2c3e50; /* Dark slate */
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: -0.02em;
  user-select: none;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: #718096; /* Grayish blue */
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled(Link)`
  background: linear-gradient(145deg, #f0f4f8, #d9e2ec);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 6px 6px 12px #bccadf, -6px -6px 12px #ffffff;
  cursor: pointer;
  text-decoration: none;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-6px);
    box-shadow: 10px 10px 20px #b0c3d9, -10px -10px 20px #ffffff;
    background: linear-gradient(145deg, #d9e2ec, #f0f4f8);
    outline: none;
  }
`;

export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #486581;
  line-height: 1.4;
  flex-grow: 1;
`;
