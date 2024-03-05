import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import Layout from "../components/Layout";

export const metadata: Metadata = {
  title: "GovData Dashboard",
  description:
    "Dashboard showing how many packages each organization has made available on GovData",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />

        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
