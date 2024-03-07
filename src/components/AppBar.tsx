import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material";

export default function AppBar({ sx }) {
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
          size="large"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GovData Dashboard
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
