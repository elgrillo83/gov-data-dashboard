import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  SxProps,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const pages = [
  {
    path: "/departments_chart",
    title: "Departments Chart",
  },
  {
    path: "/departments_list",
    title: "Departments List",
  },
  {
    path: "/organizations_chart",
    title: "Organizations Chart",
  },
  {
    path: "/organizations_table",
    title: "Organizations Table",
  },
];

export default function AppBar({ sx }: { sx: SxProps }) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <MuiAppBar
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
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem
              component="a"
              href={page.path}
              key={page.path}
              onClick={handleCloseNavMenu}
            >
              {page.title}
            </MenuItem>
          ))}
        </Menu>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GovData Dashboard
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
