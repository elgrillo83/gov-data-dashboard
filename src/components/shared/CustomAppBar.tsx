import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  SxProps,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { pages } from "../../pages";

export default function CustomAppBar({ sx }: { sx: SxProps }) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const pathname = usePathname();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar
      color="transparent"
      elevation={0}
      position="static"
      square={false}
      sx={sx}
      variant="outlined"
    >
      <Toolbar>
        <IconButton
          aria-label="menu"
          color="inherit"
          edge="start"
          onClick={handleOpenNavMenu}
          size="large"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorElNav}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          id="menu-appbar"
          keepMounted
          onClose={handleCloseNavMenu}
          open={Boolean(anchorElNav)}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          {pages.map((page) => (
            <MenuItem
              LinkComponent={Link}
              component="a"
              href={page.path}
              key={page.path}
              onClick={handleCloseNavMenu}
              selected={page.path === pathname}
            >
              {page.title}
            </MenuItem>
          ))}
        </Menu>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GovData Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
