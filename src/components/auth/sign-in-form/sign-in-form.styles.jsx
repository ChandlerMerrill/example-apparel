import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 30px;
  background-color: lightgray;
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
    margin-bottom: 20px;
    text-align: center;
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    width: 100%; /* Full width for smaller screens */
    padding: 25px;
    margin-top: 15%;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  button {
    flex: 1;
  }

  /* Adjust button layout for smaller screens */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack buttons on mobile */
    gap: 10px; /* Reduce gap for smaller screens */
  }
`;
