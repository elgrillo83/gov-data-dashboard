"use client";

import { Box, ThemeProvider } from "@mui/material";
import useIsMobile from "../hooks/useIsMobile";
import theme from "../theme";
import CustomAppBar from "./shared/CustomAppBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        gap={isMobile ? 1 : 4}
        height="100vh"
        overflow="hidden"
        p={isMobile ? 1 : 4}
      >
        <CustomAppBar sx={{ flexShrink: 0 }} />

        <Box component="main" flexGrow={1} minHeight={0}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
