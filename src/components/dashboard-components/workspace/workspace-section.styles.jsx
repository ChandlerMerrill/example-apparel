import styled from "styled-components";

export const Container = styled.section`
  max-width: 720px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9fafb; /* light gray background */
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Heading = styled.h1`
  font-size: 2.25rem; /* text-4xl */
  font-weight: 800;
  color: #1e293b; /* dark slate */
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem auto;
  color: #64748b; /* slate-500 */
  font-size: 1.125rem;
  line-height: 1.6;
  text-align: center;
`;

export const ToolsUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
  padding: 0;
  list-style: none;
`;

export const ToolItem = styled.li`
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus-within {
    box-shadow: 0 8px 32px rgba(37, 99, 235, 0.3);
    transform: translateY(-4px);
  }
`;

export const ToolInfo = styled.div`
  margin-bottom: 1.25rem;
`;

export const ToolName = styled.h2`
  font-size: 1.5rem; /* text-xl */
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

export const ToolDescription = styled.p`
  font-size: 1rem;
  color: #475569; /* slate-600 */
  line-height: 1.5;
`;

export const ToolLink = styled.a`
  align-self: flex-start;
  font-weight: 600;
  color: #2563eb;
  background-color: #e0e7ff; /* light blue background */
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  box-shadow: 0 3px 6px rgba(37, 99, 235, 0.25);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
  text-decoration: none;
  user-select: none;

  &:hover,
  &:focus {
    background-color: #2563eb;
    color: #fff;
    box-shadow: 0 6px 12px rgba(37, 99, 235, 0.45);
    outline: none;
  }
`;
