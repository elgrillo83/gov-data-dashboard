"use client";

import {
  KeyboardArrowRight as NextIcon,
  KeyboardArrowLeft as PreviousIcon,
} from "@mui/icons-material";
import { Button, CardActions } from "@mui/material";
import { usePathname } from "next/navigation";
import { pages } from "./AppBar";

export default function PageNavigationCardActions() {
  const pathname = usePathname();

  console.log("pathname", pathname);

  const foo = pages;
  const page = foo.find((page) => page.path === pathname);

  if (!page) return null;

  const previousPageIndex = foo.indexOf(page) - 1;
  const previousPage =
    foo[previousPageIndex < 0 ? foo.length - 1 : previousPageIndex];

  const nextPageIndex = (foo.indexOf(page) + 1) % foo.length;
  const nextPage = foo[nextPageIndex];

  debugger;

  console.log("previousPage", previousPage);
  console.log("nextPage", nextPage);

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
        >
          {nextPage.title}
        </Button>
      )}
    </CardActions>
  );
}
