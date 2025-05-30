import ProductsGrid from "@/components/portal-components/category/product-grid.component";

export default async function CategoryPage({ params, searchParams }) {
  const { category } = params;
  const { q, page } = searchParams || {};

  //   const products = await getProducts({
  //     category,
  //     query: q,
  //     page: Number(page) || 1,
  //   });
  const products = "dioe";

  return <ProductsGrid products={products} />;
}
