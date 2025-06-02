"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Aside, Title, NavLink } from "./side-bar.styles";

const navItems = [
  { name: "Home", path: "/dashboard" },
  { name: "Documents", path: "/dashboard/documents" },
  { name: "Next Steps", path: "/dashboard/steps" },
  { name: "Tools", path: "/dashboard/tools" },
];

export default function Sidebar() {
  const pathname = usePathname();

  // Extract accountSlug from pathname: assuming URL structure is /[accountSlug]/...
  // pathname example: "/myAccount/dashboard" or "/myAccount/documents"
  const segments = pathname?.split("/") ?? [];
  const accountSlug = segments[1] ?? "";

  return (
    <Aside>
      <Title>Client Dashboard</Title>
      <nav>
        {navItems.map(({ name, path }) => {
          // Compose full path with dynamic accountSlug prefix
          const fullPath = `/${accountSlug}${path}`;

          // Determine if the nav link is active based on pathname startsWith fullPath
          // so that /myAccount/dashboard and /myAccount/dashboard/subpage still highlight "Home"
          const isActive = pathname?.startsWith(fullPath);

          return (
            <Link key={fullPath} href={fullPath} passHref legacyBehavior>
              <NavLink $active={isActive}>{name}</NavLink>
            </Link>
          );
        })}
      </nav>
    </Aside>
  );
}
