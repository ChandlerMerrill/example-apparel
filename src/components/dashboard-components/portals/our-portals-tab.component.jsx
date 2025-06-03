"use client";

import {
  CardGrid,
  PortalCard,
  Logo,
  PortalName,
  Paragraph,
} from "./portal-tabs.styles";

import { useRouter, useParams } from "next/navigation";

export default function OurPortalsTab({ portals }) {
  const router = useRouter();
  const params = useParams(); // Next 13 way to get dynamic segments

  const accountId = params.accountSlug; // assuming [accountId] is in the route params

  const handleNavigate = (slug) => {
    router.push(`/${accountId}/${slug}/shop`);
  };

  return (
    <>
      <Paragraph>
        Explore portals created for internal teams and clients:
      </Paragraph>
      <CardGrid>
        {portals?.map((portal, idx) => (
          <PortalCard
            key={idx}
            onClick={() => handleNavigate(portal.slug)}
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
