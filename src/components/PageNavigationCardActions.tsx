"use client";

import {
  KeyboardArrowRight as NextIcon,
  KeyboardArrowLeft as PreviousIcon,
} from "@mui/icons-material";
import { Button, CardActions } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "./AppBar";

export default function PageNavigationCardActions() {
  const pathname = usePathname();

  const page = pages.find((page) => page.path === pathname);

  if (!page) return null;

  const previousPageIndex = pages.indexOf(page) - 1;
  const previousPage =
    pages[previousPageIndex < 0 ? pages.length - 1 : previousPageIndex];

  const nextPageIndex = (pages.indexOf(page) + 1) % pages.length;
  const nextPage = pages[nextPageIndex];

  if (!previousPage && !nextPage) return null;

  const justifyContent = previousPage
    ? nextPage
      ? "space-between"
      : "flex-start"
    : "flex-end";

  return (
    <CardActions sx={{ justifyContent: justifyContent }}>
      {previousPage && (
        <Button
          LinkComponent={Link}
          color="primary"
          href={previousPage.path}
          size="small"
          startIcon={<PreviousIcon />}
        >
          {previousPage.title}
        </Button>
      )}

      {nextPage && (
        <Button
          color="primary"
          endIcon={<NextIcon />}
          href={nextPage.path}
          size="small"
          sx={{ textAlign: "right" }}
        >
          {nextPage.title}
        </Button>
      )}
    </CardActions>
  );
}
