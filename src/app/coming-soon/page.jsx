"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "@/components/button/button.component";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  font-size: 3.5rem; /* bigger */
  font-weight: 900; /* bolder */
  margin-bottom: 1.25rem;
  letter-spacing: 0.05em; /* subtle spacing */
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7); /* shadow for contrast */
  animation: ${fadeIn} 1s ease forwards;
`;

const Description = styled.p`
  font-size: 1.5rem; /* bigger than before */
  color: #ddd;
  margin-bottom: 2rem;
  max-width: 30rem;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
  animation: ${fadeIn} 1.5s ease forwards;
`;
const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(0.7);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  height: 100vh; /* Full viewport height */
  color: white; /* Text color on dark background */
`;

export default function ComingSoonPage() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <BackgroundImage>
        <Image
          src="/assets/coming-soon.jpg"
          alt="Coming Soon"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </BackgroundImage>

      <Container>
        <Title>We’re Almost Ready</Title>
        <Description>
          Our completed dealer platform is launching soon. In the meantime, you
          can create an account to get early access and onboarding support.
        </Description>
        <Button
          onClick={() =>
            router.push(`/auth?redirect=${encodeURIComponent(pathname)}`)
          }
        >
          Login / Create Account
        </Button>
      </Container>
    </>
  );
}
