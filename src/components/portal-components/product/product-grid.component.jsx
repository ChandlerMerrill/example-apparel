import { ProductCard } from "./product-card.component";
import { ProductGrid } from "./product-grid.styles";

const ProductList = ({ products }) => (
  <ProductGrid>
    {products.map((product) => {
      // Get the first image URL from the images dictionary
      const firstImageSrc = product.images
        ? Object.values(product.images)[0]
        : null;

      return (
        <ProductCard
          key={product.sku}
          imageSrc={firstImageSrc}
          name={product.name}
          sku={product.sku}
          price={product.clientPrice}
          description={product.description}
        />
      );
    })}
  </ProductGrid>
);

export default ProductList;
