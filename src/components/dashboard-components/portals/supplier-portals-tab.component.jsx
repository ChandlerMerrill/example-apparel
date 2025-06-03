"use client";

import {
  CardGrid,
  PortalCard,
  Logo,
  PortalName,
  Paragraph,
} from "./portal-tabs.styles";

import { useRouter, useParams } from "next/navigation";

export default function SupplierPortalsTab({ portals }) {
  const router = useRouter();
  const params = useParams();

  const handleNavigate = (portal) => {
    router.push(`/${portal.supplierAccountId}/${portal.slug}/shop`);
  };

  return (
    <>
      <Paragraph>Portals for supplier interaction and operations:</Paragraph>
      <CardGrid>
        {portals?.map((portal, idx) => (
          <PortalCard
            key={idx}
            onClick={() => handleNavigate(portal)}
            style={{
              backgroundImage: `url(${portal.bannerUrl})`,
            }}
          >
            <Logo src={portal.logoUrl} alt={`${portal.name} logo`} />
            <PortalName>{portal.name}</PortalName>
          </PortalCard>
        ))}
      </CardGrid>
    </>
  );
}
