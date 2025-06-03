"use client";

import { useState } from "react";
import {
  TabsContainer,
  TabsHeader,
  TabButton,
  ContentContainer,
} from "./portal-tabs.styles";
import OurPortalsTab from "./our-portals-tab.component";
import SupplierPortalsTab from "./supplier-portals-tab.component";

export default function PortalsTabs({ ourPortals, supplierPortals }) {
  const [activeTab, setActiveTab] = useState("our");

  return (
    <TabsContainer>
      <TabsHeader>
        <TabButton
          isActive={activeTab === "our"}
          onClick={() => setActiveTab("our")}
        >
          Our Portals
        </TabButton>
        <TabButton
          isActive={activeTab === "supplier"}
          onClick={() => setActiveTab("supplier")}
        >
          Supplier Portals
        </TabButton>
      </TabsHeader>

      <ContentContainer>
        {activeTab === "our" ? (
          <OurPortalsTab portals={ourPortals} />
        ) : (
          <SupplierPortalsTab portals={supplierPortals} />
        )}
      </ContentContainer>
    </TabsContainer>
  );
}
