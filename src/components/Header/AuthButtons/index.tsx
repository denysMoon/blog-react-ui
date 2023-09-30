import Button from "@mui/material/Button";
import { useAppDispatch } from "../../../store/dispatch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout, reset, selectedUser } from "@/store/auth/authSlice";

export const AuthButtons: React.FC = () => {
  const { isAuthenticated } = useSelector(selectedUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    reset();
    dispatch(logout());
    navigate("/login");
  };

  if (isAuthenticated) {
    return (
      <Button onClick={logoutHandler} color="inherit">
        Logout
      </Button>
    );
  }

  return (
    <Button onClick={() => navigate("/login")} color="inherit">
      Login
    </Button>
  );
};
