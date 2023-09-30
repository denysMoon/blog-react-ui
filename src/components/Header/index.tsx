import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/dispatch";
import { logout, reset, selectedUser } from "../../store/auth/authSlice";

export const Header = () => {
  // Figure out what the problem with useAppSelector
  const { user } = useSelector(selectedUser);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log("user", user);

  const logoutHandler = () => {
    reset();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nest JS + React JS
          </Typography>

          <Button onClick={() => navigate("/login")} color="inherit">
            Login
          </Button>

          {user && <p> {user.email}</p>}

          <Button onClick={logoutHandler} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
