import { Box, CssBaseline } from "@mui/material";
import type { Metadata } from "next";

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

        <Box component="main" minHeight="100vh" p={4}>
          {children}
        </Box>
      </body>
    </html>
  );
}
