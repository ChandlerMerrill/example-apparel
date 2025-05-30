// app/(dashboard)/[accountSlug]/(portals)/[portalSlug]/page.jsx
import PortalBanner from "@/components/portal-components/banner/portal-banner.component";
import ProductList from "@/components/portal-components/product/product-grid.component";
import { getPortalData } from "@/lib/portals/portals.server";
import { getProducts } from "@/lib/products/get-products.server";
import { serializeTimestamps } from "@/utils/time/time-conversions.util";

export default async function Storefront({ params }) {
  const { accountSlug } = params;
  const { portalSlug } = params; // <-- this must match the folder name
  console.log("Portal param received:", portalSlug);

  const portalData = await getPortalData(accountSlug, portalSlug);
  const portal = serializeTimestamps(portalData);
  const products = await getProducts(accountSlug, portalSlug);
  console.log("Products fetched:", products);
  console.log("Portal data after conversion:", portal);
  if (!portalData) {
    return (
      <main>
        <h1>Portal not found</h1>
        <p>Slug: {portalSlug}</p>
      </main>
    );
  }

  return (
    <>
      <PortalBanner portal={portal} />
      <ProductList products={products} />
    </>
  );
}
