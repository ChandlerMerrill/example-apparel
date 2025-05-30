import ProductsGrid from "../components/ProductsGrid";
import { getProducts } from "@/lib/products";

export default async function CategoryPage({ params, searchParams }) {
  const { category } = params;
  const { q, page } = searchParams || {};

  const products = await getProducts({
    category,
    query: q,
    page: Number(page) || 1,
  });

  return <ProductsGrid products={products} />;
}
