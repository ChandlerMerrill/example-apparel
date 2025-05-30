"use client";
import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px; /* Set a max-width to prevent it from growing too large */
  margin: 100px auto;

  /* Add media query for smaller screens (mobile and tablets) */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack the components vertically on small screens */
    margin: 50px auto; /* Reduce the margin on smaller screens */
    padding: 10px 20px; /* Add some padding on the sides */
    gap: 20px;
  }

  @media (max-width: 480px) {
    margin: 30px auto; /* Further reduce margin for very small screens */
    padding: 0 10px; /* Smaller padding for tight screens */
    gap: 20px;
  }
`;
