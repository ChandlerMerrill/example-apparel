import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "@/components/button/button.styles";
import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 20vw;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, width 0.3s ease, height 0.3s ease; /* Smooth transition for width and height */

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
    border-radius: 4px;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
      background-color: #f1f1f1;
      transform: scale(1.05);
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    right: 0; /* Align to the left side on mobile */
    padding: 15px; /* Reduce padding */
    height: auto; /* Allow height to grow with content */
    top: 75px; /* Adjust top spacing on mobile */
  }

  /* Desktop responsiveness */
  @media (min-width: 1024px) {
    width: 30vw; /* Change width to 30% of viewport on larger screens */
    height: 380px; /* Increase height slightly for larger desktop */
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  color: #777;
  text-align: center;

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    font-size: 16px; /* Slightly smaller text on mobile */
    margin: 30px auto; /* Reduce margin on smaller screens */
  }
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-right: 10px;
  gap: 10px;

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    height: auto; /* Allow content to grow on smaller screens */
    padding-right: 5px; /* Reduce padding */
  }

  @media (max-width: 480px) {
    gap: 8px; /* Slightly smaller gap for mobile */
  }
`;
