// @/components/portal-components/product/product-card.component.jsx
import Image from "next/image";
import {
  Card,
  CardImageWrapper,
  CardBody,
  ProductName,
  ProductSku,
  ProductDescription,
  ProductPrice,
} from "./prodcut-card.styles";

/**
 * Renders a storefront product card.
 * @param {Object} props
 * @param {Dict} props.imageSrc – URL for the product image
 * @param {string} props.name     – Product name
 * @param {string} props.sku      – Stock-keeping unit
 * @param {string} props.description – Brief description or tagline
 */
export const ProductCard = ({ imageSrc, name, sku, price, description }) => (
  <Card>
    <CardImageWrapper>
      <Image
        src={imageSrc}
        alt={name}
        layout="fill"
        objectFit="contain"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
        priority
      />
    </CardImageWrapper>

    <CardBody>
      <ProductName>{name}</ProductName>
      <ProductSku>SKU {sku}</ProductSku>
      <ProductPrice>${price}</ProductPrice>
      {/* <ProductDescription>{description}</ProductDescription> */}
    </CardBody>
  </Card>
);
