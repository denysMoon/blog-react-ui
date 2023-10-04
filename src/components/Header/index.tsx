import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { AuthButtons } from "./AuthButtons";
import { Navigate } from "./Navigate";
import { Logo } from "./Logo";
import { SwitchTheme } from "./SwitchTheme";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo />
            <Navigate />
          </Box>
          <div>
            <AuthButtons />
            <SwitchTheme />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
