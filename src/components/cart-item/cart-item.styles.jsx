import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  align-items: center; /* Vertically center the content */

  img {
    width: 30%;
    height: auto; /* Maintain aspect ratio */
    max-height: 80px; /* Ensure it doesn’t exceed the container height */
    object-fit: contain; /* Prevent stretching and maintain aspect ratio */
    border-radius: 4px; /* Optional: adds rounded corners */
  }
`;

export const CartItemResponsive = styled.div`
  width: 100%;
  display: flex;

  margin-bottom: 15px;

  img {
    width: 40%; /* Default width for mobile, smaller screens */
    object-fit: cover; /* Ensures the aspect ratio is maintained */
  }

  @media (min-width: 1024px) {
    img {
      width: 30%; /* Adjust image size for larger screens (e.g., desktop) */
      object-fit: cover; /* Ensures the aspect ratio is maintained */
    }
  }
`;

export const ItemDetails = styled.div`
  width: 60%; /* Adjusts according to image width */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
  }
`;
