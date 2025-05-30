"use client";

import { BannerImage, BannerWrapper } from "./portal-banner.styles";

const PortalBanner = ({ portal }) => {
  const { name, bannerUrl } = portal;


  if (!bannerUrl) return null;

  return (
    <BannerWrapper>
      <BannerImage
        src={bannerUrl}
        alt={`${name} banner`}
        fill
        priority
        sizes="100vw"
      />
    </BannerWrapper>
  );
};

export default PortalBanner;
