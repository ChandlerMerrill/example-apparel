"use client";

// app/components/dashboard-components/home/home.component.jsx
import React from "react";
import Link from "next/link";
import {
  Container,
  Title,
  Description,
  Grid,
  Card,
  CardTitle,
  CardDescription,
} from "./home.styles";

export default function DashboardHome() {
  return (
    <Container>
      <Title>Welcome to Your Dashboard</Title>
      <Description>
        This is your central hub for accessing important documents, onboarding
        steps, and collaboration tools.
      </Description>

      <Grid>
        <Link href="/dashboard/documents" passHref>
          <Card as="a">
            <CardTitle>📁 Documents</CardTitle>
            <CardDescription>
              View and download all shared files.
            </CardDescription>
          </Card>
        </Link>

        <Link href="/dashboard/steps" passHref>
          <Card as="a">
            <CardTitle>✅ Onboarding Checklist</CardTitle>
            <CardDescription>Track your setup progress.</CardDescription>
          </Card>
        </Link>

        <Link href="/dashboard/tools" passHref>
          <Card as="a">
            <CardTitle>🔧 Collaboration Tools</CardTitle>
            <CardDescription>
              Access Markup, Milanote, and more.
            </CardDescription>
          </Card>
        </Link>
      </Grid>
    </Container>
  );
}
