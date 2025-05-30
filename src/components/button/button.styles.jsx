import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  white-space: nowrap; /* Prevent text from wrapping */

  /* Rounded corners and shadow */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;

    /* Lift the button */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    transform: translateY(1px);
  }

  /* Responsive Design */
  @media screen and (max-width: 600px) {
    font-size: 14px;
    padding: 0 25px;
    min-width: 120px;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;

    /* Lift effect */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  align-items: center;
  &:hover {
    background-color: black;
    color: white;
    border: none;

    /* Lift effect */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;
export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const CTAButton = styled(BaseButton)`
  background-color: #0077cc; /* Vibrant blue */
  color: #fff; /* White text */
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
  align-items: center;
  z-index: 2;
  max-width: 300px;
  padding: 15px 30px; /* Larger padding for a prominent button */
  border-radius: 50px; /* Rounded corners for a soft look */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Subtle lift effect */
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #005ea6; /* Slightly darker blue on hover */
    transform: translateY(-3px); /* Lift effect */
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2); /* Enhanced shadow */
  }

  &:active {
    transform: translateY(1px); /* Press-in effect */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
