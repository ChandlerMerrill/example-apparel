"use client";
// @/components/portal-components/product/product-card.styles.jsx
import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  background: #fff;
  transition: transform 180ms ease, box-shadow 180ms ease;
  height: 360px; /* fixed height to keep taller shape */
  width: 260px; /* fixed width */

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  }
`;

export const CardImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  height: 60%; /* about 60% of card height */
  width: 100%;
  background: #f9f9f9; /* subtle background so empty spaces don’t look odd */
`;

export const CardBody = styled.div`
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  align-items: center;
`;

export const ProductName = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  color: #111;
  text-align: center;
`;
export const ProductPrice = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  color: #111;
`;

export const ProductSku = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.75rem;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.45;
  color: #333;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;
