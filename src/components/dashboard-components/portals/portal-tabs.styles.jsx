import styled from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  box-sizing: border-box;
`;

export const TabsHeader = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb; /* Tailwind border-gray-200 */
`;

export const TabButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})`
  position: relative;
  padding: 0.75rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  background: none;
  border: none;
  border-bottom: 3px solid
    ${(props) => (props.isActive ? "#3b82f6" : "transparent")}; /* blue-500 */
  color: ${(props) =>
    props.isActive ? "#1e40af" : "#6b7280"}; /* blue-800 or gray-500 */
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #374151; /* gray-700 */
  }

  &:focus {
    outline: none;
    color: #1d4ed8;
  }
`;

export const ContentContainer = styled.div`
  padding-top: 0.5rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  color: #4b5563; /* text-gray-700 */
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
`;

export const PortalCard = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  padding: 1.25rem;
  min-height: 160px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #f9fafb;
`;

export const Logo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 0.5rem;
  background: white;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
`;

export const PortalName = styled.h3`
  font-size: 1rem;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  margin: 0;
`;
