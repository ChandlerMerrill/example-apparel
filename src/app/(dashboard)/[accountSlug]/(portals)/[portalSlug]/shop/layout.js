// app/(dashboard)/[accountSlug]/(portals)/[portalSlug]/layout.jsx

import { getPortalData } from "@/lib/portals/portals.server";
import React from "react";
import FileUpload from "@/components/upload/assets/asset-upload.component";
import PortalNavigationBar from "@/components/portal-components/navigation-bar/navigation-bar.component";
import PortalFooter from "@/components/portal-components/footer/footer.component";
import { serializeTimestamps } from "@/utils/time/time-conversions.util";
const portalLayout = async ({ children, params }) => {
  const { accountSlug } = params; // <-- this must match the folder name
  const { portalSlug } = params;
  const portalData = await getPortalData(accountSlug, portalSlug);

  if (!portalData) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-2xl font-bold">Store Not Found</h1>
        <p className="mt-2 text-gray-500">
          We couldn't find an for: <strong>{accountSlug}</strong>
          We couldn't find a store for: <strong>{portalSlug}</strong>
        </p>
      </main>
    );
  }
  // ✅ Convert Firestore Timestamps to strings
  const portal = serializeTimestamps(portalData);
  // console.log("Portal data after conversion:", portal);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <PortalNavigationBar portal={portal} />
      {/* <FileUpload portalSlug={portalSlug} /> */}
      <main style={{ flexGrow: 1 }}>{children}</main>
      <PortalFooter portal={portal} />
    </div>
  );
};

export default portalLayout;
