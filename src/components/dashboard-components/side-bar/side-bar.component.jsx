"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Aside, Title, NavLink } from "./side-bar.styles";
import { Home, Folder, CheckCircle, Wrench } from "lucide-react";
import styled from "styled-components";

const navItems = [
  { name: "Home", path: "", Icon: Home },
  { name: "Documents", path: "documents", Icon: Folder },
  { name: "Next Steps", path: "steps", Icon: CheckCircle },
  { name: "Tools", path: "tools", Icon: Wrench },
];

const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Sidebar() {
  const pathname = usePathname();
  const segments = pathname?.split("/") ?? [];
  const accountSlug = segments[1] ?? "";

  const basePath = `/${accountSlug}/dashboard`;

  return (
    <Aside>
      <Title>Client Dashboard</Title>

      <nav>
        {navItems.map(({ name, path, Icon }) => {
          const fullPath = `${basePath}${path ? `/${path}` : ""}`;
          const isActive =
            path === ""
              ? pathname === fullPath // Home: only exact match
              : pathname === fullPath || pathname.startsWith(`${fullPath}/`);

          return (
            <NavLink key={fullPath} href={fullPath} $active={isActive}>
              <NavContent>
                <IconWrapper>
                  <Icon size={20} />
                </IconWrapper>
                {name}
              </NavContent>
            </NavLink>
          );
        })}
      </nav>
    </Aside>
  );
}
