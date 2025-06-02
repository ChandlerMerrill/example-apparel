"use client";

import React from "react";
import {
  Container,
  Title,
  Description,
  Grid,
  Card,
  CardTitle,
  CardDescription,
} from "./home.styles";
import { Folder, CheckCircle, Network } from "lucide-react";
import { usePathname } from "next/navigation";

const IconWrapper = ({ Icon }) => (
  <Icon size={30} style={{ marginRight: "0.5rem" }} />
);

export default function DashboardHome() {
  const pathname = usePathname();
  const segments = pathname?.split("/") ?? [];
  const accountSlug = segments[1] ?? "";

  const baseHref = `/${accountSlug}/dashboard`;

  return (
    <Container>
      <Title>Welcome to Your Dashboard</Title>
      <Description>
        This is your central hub for accessing important documents, onboarding
        steps, and collaboration tools.
      </Description>

      <Grid>
        <Card href={`${baseHref}/documents`}>
          <CardTitle>
            <IconWrapper Icon={Folder} />
            Files
          </CardTitle>
          <CardDescription>View and download all shared files.</CardDescription>
        </Card>

        <Card href={`${baseHref}/to-do`}>
          <CardTitle>
            <IconWrapper Icon={CheckCircle} />
            Onboarding Checklist
          </CardTitle>
          <CardDescription>Track your setup progress.</CardDescription>
        </Card>

        <Card href={`${baseHref}/workspace`}>
          <CardTitle>
            <IconWrapper Icon={Network} />
            Workspace & Tools
          </CardTitle>
          <CardDescription>Access Markup, Milanote, and more.</CardDescription>
        </Card>
      </Grid>
    </Container>
  );
}
