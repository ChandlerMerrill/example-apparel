// app/[accountSlug]/portals/page.jsx
import PortalsTabs from "@/components/dashboard-components/portals/portal-tabs.component";
import { getAccessibleSupplierPortals } from "@/lib/account/portals/get-portals/getAccessibleSupplierPortal";
import { getOurPortals } from "@/lib/account/portals/get-portals/getOurPortals.server";
import { serializeTimestamps } from "@/utils/time/time-conversions.util";

export default async function PortalsPage({ params }) {
  const accountSlug = params.accountSlug;

  const ourPortalsRaw = await getOurPortals(accountSlug);
  const ourPortals = ourPortalsRaw.map((portal) => serializeTimestamps(portal));

  const supplierPortalsRaw = await getAccessibleSupplierPortals(accountSlug);
  const supplierPortals = supplierPortalsRaw.map((portal) =>
    serializeTimestamps(portal)
  );
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Portals</h1>
      <PortalsTabs ourPortals={ourPortals} supplierPortals={supplierPortals} />
    </div>
  );
}
