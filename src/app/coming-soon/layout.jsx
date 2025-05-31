// app/coming-soon/layout.jsx
import PlatformNavigationBar from "@/components/main-platform-components/navigation-bar/platform-navigation-bar.component";
// import PortalNavigationBar from "@/components/portal-components/navigation-bar/navigation-bar.component";
import React from "react";
// import PublicNavigation from "@/components/public/navigation/navigation.component";
// import PublicFooter from "@/components/public/footer/footer.component";

export default function ComingSoonLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <PlatformNavigationBar
        logoUrl={"/assets/ESOTERIC CIRCLE BLACK@4x.png"}
        name={"Esoteric Circle"}
      />
      <main className="flex-grow">{children}</main>
      {/* <PublicFooter /> */}
    </div>
  );
}
