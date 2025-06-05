// app/(dashboard)/[accountSlug]/dashboard/layout.jsx
import React from "react";

import Sidebar from "@/components/dashboard-components/side-bar/side-bar.component";

const navItems = [
  { name: "Home", path: "/dashboard" },
  { name: "Documents", path: "/dashboard/documents" },
  { name: "Next Steps", path: "/dashboard/steps" },
  { name: "Tools", path: "/dashboard/tools" },
];

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "1.5rem", backgroundColor: "white" }}>
        {children}
      </main>
    </div>
  );
}
