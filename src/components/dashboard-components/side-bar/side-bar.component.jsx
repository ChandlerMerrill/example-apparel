"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Aside, Title, NavLink } from "./side-bar.styles";
import {
  Home,
  Folder,
  CheckCircle,
  Network,
  Globe,
  ShoppingCart,
  PackageCheck,
} from "lucide-react";
import styled from "styled-components";

const SectionTitle = styled.div`
  margin: 1.5rem 0 0.5rem;
  padding-left: 1rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: #888;
  text-transform: uppercase;
`;

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

  const renderLink = (name, path, Icon) => {
    const fullPath = `${basePath}${path ? `/${path}` : ""}`;
    const isActive =
      path === ""
        ? pathname === fullPath
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
  };

  return (
    <Aside>
      <Title>Client Dashboard</Title>

      {/* Primary Section */}
      <nav>
        {renderLink("Home", "", Home)}
        {renderLink("Files", "documents", Folder)}
        {renderLink("To-Do", "to-do", CheckCircle)}
        {renderLink("Workspace", "workspace", Network)}
      </nav>

      {/* Divider Section */}
      <SectionTitle>Beta Tools</SectionTitle>

      <nav>
        {renderLink("Portals", "portals", Globe)}
        {renderLink("Orders Received", "orders/received", PackageCheck)}
        {renderLink("Purchasing", "orders/purchasing", ShoppingCart)}
      </nav>
    </Aside>
  );
}
