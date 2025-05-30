// store-banner.styles.js
import styled from "styled-components";
import Image from "next/image";

export const BannerImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const BannerWrapper = styled.div`
  position: relative;
  width: 100vw;
  aspect-ratio: 3;
  overflow: hidden;
`;
