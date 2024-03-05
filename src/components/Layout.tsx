"use client";

import { Box, ThemeProvider } from "@mui/material";
import useIsMobile from "../hooks/useIsMobile";
import theme from "../theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        minHeight="100vh"
        overflow="hidden"
        p={isMobile ? 1 : 4}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
