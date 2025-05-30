"use client";

import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: #111827;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #10b981; /* green-500 */
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.375rem;
`;

export default function ProductsGrid({ products }) {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <Grid>
      {products.map((product) => (
        <Card key={product.id}>
          {product.image && (
            <ProductImage src={product.image} alt={product.name} />
          )}
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        </Card>
      ))}
    </Grid>
  );
}
