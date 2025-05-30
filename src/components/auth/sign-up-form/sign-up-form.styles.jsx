import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  h2 {
    margin: 10px 0;
    font-size: 24px;
    color: #333;
    text-align: center;
  }

  span {
    color: #555;
    text-align: center;
    margin-bottom: 20px;
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    width: 100%; /* Full width for smaller screens */
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack name fields vertically on mobile */
  }
`;
