"use client";

// app/(dashboard)/[accountSlug]/(portals)/[portalSlug]/shop/products/layout.jsx
import styled from "styled-components";

import SearchBox from "@/components/portal-components/category/search-bar.component";
import CategoriesSidebar from "@/components/portal-components/category/categories-side-bar.component";

// export const metadata = {
//   title: "Products | YourStore",
// };

const Section = styled.section`
  display: flex;
`;

const Sidebar = styled.aside`
  width: 16rem; /* Tailwind w-64 */
  flex-shrink: 0;
  border-right: 1px solid #e5e7eb; /* Tailwind border-r */
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
  padding: 1rem; /* Tailwind p-4 */
`;

const Main = styled.main`
  flex: 1 1 0%;
  padding: 1.5rem; /* Tailwind p-6 */
  overflow-x: hidden;
`;

export default async function ProductsLayout({ children }) {
  const categories = "spin";

  return (
    <Section>
      <Sidebar>
        <SearchBox />
        <CategoriesSidebar categories={categories} />
      </Sidebar>

      <Main>{children}</Main>
    </Section>
  );
}
