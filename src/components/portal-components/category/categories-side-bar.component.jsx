"use client";

import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  margin-bottom: 0.5rem;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 0.75rem;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  color: ${(props) =>
    props.active ? "#2563eb" : "#374151"}; /* blue-600 or gray-700 */
  font-weight: ${(props) => (props.active ? "600" : "400")};
  cursor: pointer;
  border-radius: 0.375rem;

  &:hover {
    background-color: #e0e7ff; /* light blue */
    color: #1e40af; /* darker blue */
  }
`;

export default function CategoriesSidebar({ categories }) {
  const router = useRouter();
  const pathname = usePathname();

  // Extract the current category from pathname, assuming route like /products/category/[category]
  const currentCategory = pathname?.split("/")[3] || "";

  const handleClick = (categorySlug) => {
    router.push(`/products/category/${categorySlug}`);
  };

  return (
    <nav aria-label="Product categories">
      <List>
        {categories.map(({ id, name, slug }) => (
          <Item key={id}>
            <LinkButton
              type="button"
              onClick={() => handleClick(slug)}
              active={slug === currentCategory}
              aria-current={slug === currentCategory ? "page" : undefined}
            >
              {name}
            </LinkButton>
          </Item>
        ))}
      </List>
    </nav>
  );
}
