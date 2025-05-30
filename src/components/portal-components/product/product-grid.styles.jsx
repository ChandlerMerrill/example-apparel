"use client";
// components/ProductList.styles.js
import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
`;
